import { eventChannel, EventChannel, SagaIterator } from 'redux-saga';
import { all, call, CallEffect, cancelled, fork, put, take, takeLatest } from 'redux-saga/effects';
import { firebase } from '../firebase';
import { User } from '../types/UserType';
import { actions } from './actions';

function onAuthStateChanged(): EventChannel<firebase.User | null> {
  return eventChannel(emitter => {
    return firebase.auth().onAuthStateChanged(emitter);
  });
}

function onAuthStateChangedEffect(): CallEffect<EventChannel<firebase.User | null>> {
  return call(onAuthStateChanged);
}

function* userLoginSaga(): SagaIterator {
  const provider = new firebase.auth.GoogleAuthProvider();
  yield call(firebase.auth().signInWithRedirect, provider);
}

function* userLogoutSaga(): SagaIterator {
  yield call(firebase.auth().signOut);
}

function toUser(user: firebase.User): User {
  return { id: user.uid };
}

function* watchUserStatusChangeSaga(): SagaIterator {
  const chan = yield call(onAuthStateChangedEffect);
  try {
    while (true) {
      const rawUser = yield take(chan);
      if (rawUser !== null) {
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
    yield takeLatest(actions.USER_LOGIN_REQUEST, userLoginSaga),
    yield takeLatest(actions.USER_LOGOUT_REQUEST, userLogoutSaga),
    yield fork(watchUserStatusChangeSaga),
  ]);
}
