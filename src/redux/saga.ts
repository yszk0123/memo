import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { noop } from '../utils/noop';
import { actions } from './actions';

// FIXME: Remove
export function* exampleSaga() {
  yield call(noop);
  yield put(actions.USER_LOGIN_REQUEST());
  yield takeEvery(actions.USER_LOGIN_REQUEST, noop);
}

function* userLoginSaga() {
  yield put(actions.USER_LOGIN_SUCCESS());
}

export function* saga() {
  yield takeLatest(actions.USER_LOGIN_REQUEST, userLoginSaga);
}
