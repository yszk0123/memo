import { eventChannel, EventChannel, SagaIterator } from 'redux-saga';
import {
  all,
  call,
  CallEffect,
  cancelled,
  fork,
  put,
  select,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { firebase } from '../firebase';
import { createNote, Note } from '../types/NoteType';
import { User } from '../types/UserType';
import { Action, actions, ActionType } from './actions';
import { selectors } from './selectors';

type EmptyUser = { _: 'EmptyUser' };

const emptyUser: EmptyUser = { _: 'EmptyUser' };

function onAuthStateChanged(): EventChannel<firebase.User | EmptyUser> {
  return eventChannel(emitter => {
    return firebase.auth().onAuthStateChanged(user => {
      emitter(user || emptyUser);
    });
  });
}

function onAuthStateChangedEffect(): CallEffect<EventChannel<firebase.User | EmptyUser>> {
  return call(onAuthStateChanged);
}

function* userLoginSaga(): SagaIterator {
  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();
  yield call([auth, auth.signInWithRedirect], provider);
}

function* userLogoutSaga(): SagaIterator {
  const auth = firebase.auth();
  yield call([auth, auth.signOut]);
}

function toUser(user: firebase.User): User {
  return { id: user.uid, displayName: user.displayName };
}

function* watchUserStatusChangeSaga(): SagaIterator {
  const chan = yield onAuthStateChangedEffect();
  try {
    while (true) {
      const rawUser = yield take(chan);
      if (rawUser !== emptyUser) {
        const user = toUser(rawUser);
        yield put(actions.USER_LOGIN_SUCCESS(user));
        yield put(actions.NOTE_GET_ALL_REQUEST());
      } else {
        yield put(actions.USER_LOGOUT_SUCCESS());
      }
    }
  } finally {
    if (yield cancelled()) {
      chan.close();
    }
  }
}

function* noteAddSaga({
  payload: { text },
}: Action[ActionType.NOTE_ADD_REQUEST]): SagaIterator<void> {
  const user: User | null = yield select(selectors.user);
  if (user === null) {
    return;
  }

  const db = firebase.firestore();
  const noteRef = db.collection('notes').doc();
  const note = yield call(createNote, noteRef, user.id, text);
  yield call([noteRef, noteRef.set], note);
  yield put(actions.NOTE_ADD_SUCCESS(note));
}

function* noteUpdateSaga({
  payload: { noteId, text },
}: Action[ActionType.NOTE_UPDATE_REQUEST]): SagaIterator<void> {
  const user: User | null = yield select(selectors.user);
  if (user === null) {
    return;
  }

  const db = firebase.firestore();
  const noteRef = db.collection('notes').doc(noteId);
  yield call([noteRef, noteRef.update], 'text', text);
  const newNoteRef = yield call([noteRef, noteRef.get]);
  const newNote = yield call([newNoteRef, newNoteRef.data]);
  yield put(actions.NOTE_UPDATE_SUCCESS(newNote));
}

function* noteRemoveSaga({
  payload: { noteId },
}: Action[ActionType.NOTE_REMOVE_REQUEST]): SagaIterator<void> {
  const user: User | null = yield select(selectors.user);
  if (user === null) {
    return;
  }

  const db = firebase.firestore();
  const noteRef = db.collection('notes').doc(noteId);
  yield call([noteRef, noteRef.delete]);
  yield put(actions.NOTE_REMOVE_SUCCESS(noteId));
}

function* noteGetAllSaga(_: Action[ActionType.NOTE_GET_ALL_REQUEST]): SagaIterator<void> {
  const user: User | null = yield select(selectors.user);
  if (user === null) {
    return;
  }

  const db = firebase.firestore();
  const notesRef = db
    .collection('notes')
    .where('authorId', '==', user.id)
    .orderBy('createdAt', 'desc');
  const snapshot: firebase.firestore.QuerySnapshot = yield call([notesRef, notesRef.get]);
  const notes = getAll<Note>(snapshot);
  yield put(actions.NOTE_GET_ALL_SUCCESS(notes));
}

export function* saga(): SagaIterator {
  yield all([
    takeLatest(ActionType.USER_LOGIN_REQUEST, userLoginSaga),
    takeLatest(ActionType.USER_LOGOUT_REQUEST, userLogoutSaga),
    takeLatest(ActionType.NOTE_GET_ALL_REQUEST, noteGetAllSaga),
    takeEvery(ActionType.NOTE_ADD_REQUEST, noteAddSaga),
    takeEvery(ActionType.NOTE_UPDATE_REQUEST, noteUpdateSaga),
    takeEvery(ActionType.NOTE_REMOVE_REQUEST, noteRemoveSaga),
    fork(watchUserStatusChangeSaga),
  ]);
}

function getAll<T>(snapshot: firebase.firestore.QuerySnapshot): T[] {
  const result: T[] = [];
  snapshot.forEach(doc => {
    result.push(doc.data() as T);
    return result;
  });
  return result;
}
