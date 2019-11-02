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
import { firebase, GoogleAuthProvider } from '../firebase';
import { createNote, Note } from '../types/NoteType';
import { User } from '../types/UserType';
import { noteAdd, noteGetAll, noteRemove, noteUpdate, userLogin, userLogout } from './actions';
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
  const provider = new GoogleAuthProvider();
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
        yield put(userLogin.success(user));
        yield put(noteGetAll.request());
      } else {
        yield put(userLogout.success());
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
}: ReturnType<typeof noteAdd.request>): SagaIterator<void> {
  const user: User | null = yield select(selectors.user);
  if (user === null) {
    return;
  }

  const db = firebase.firestore();
  const noteRef = db.collection('notes').doc();
  const note = yield call(createNote, noteRef, user.id, text);
  yield call([noteRef, noteRef.set], note);
  yield put(noteAdd.success(note));
}

function* noteUpdateSaga({
  payload: { noteId, text },
}: ReturnType<typeof noteUpdate.request>): SagaIterator<void> {
  const user: User | null = yield select(selectors.user);
  if (user === null) {
    return;
  }

  const db = firebase.firestore();
  const noteRef = db.collection('notes').doc(noteId);
  yield call([noteRef, noteRef.update], 'text', text);
  const newNoteRef = yield call([noteRef, noteRef.get]);
  const newNote = yield call([newNoteRef, newNoteRef.data]);
  yield put(noteUpdate.success(newNote));
}

function* noteRemoveSaga({
  payload: { noteId },
}: ReturnType<typeof noteRemove.request>): SagaIterator<void> {
  const user: User | null = yield select(selectors.user);
  if (user === null) {
    return;
  }

  const db = firebase.firestore();
  const noteRef = db.collection('notes').doc(noteId);
  yield call([noteRef, noteRef.delete]);
  yield put(noteRemove.success(noteId));
}

function* noteGetAllSaga(): SagaIterator<void> {
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
  yield put(noteGetAll.success(notes));
}

export function* saga(): SagaIterator {
  yield all([
    takeLatest(userLogin.request, userLoginSaga),
    takeLatest(userLogout.request, userLogoutSaga),
    takeLatest(noteGetAll.request, noteGetAllSaga),
    takeEvery(noteAdd.request, noteAddSaga),
    takeEvery(noteUpdate.request, noteUpdateSaga),
    takeEvery(noteRemove.request, noteRemoveSaga),
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
