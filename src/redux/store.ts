import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import { saga } from './saga';

export function createStore() {
  const composeEnhancers =
    typeof window !== 'undefined'
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createReduxStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(saga);

  return store;
}
