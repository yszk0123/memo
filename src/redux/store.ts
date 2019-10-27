import { applyMiddleware, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import { saga } from './saga';

export function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createReduxStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(saga);

  return store;
}
