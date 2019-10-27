import { eventChannel, EventChannel, SagaIterator } from 'redux-saga';
import { all, call, CallEffect, cancelled, fork, put, take, takeLatest } from 'redux-saga/effects';
import { firebase } from '../firebase';
import { User } from '../types/UserType';
import { actions, ActionType } from './actions';

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

export function* saga(): SagaIterator {
  yield all([
    takeLatest(ActionType.USER_LOGIN_REQUEST, userLoginSaga),
    takeLatest(ActionType.USER_LOGOUT_REQUEST, userLogoutSaga),
    fork(watchUserStatusChangeSaga),
  ]);
}
