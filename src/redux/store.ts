import { compose, createStore as createReduxStore } from 'redux';

import { reducer } from './reducer';

export function createStore() {
  const composeEnhancers =
    typeof window !== 'undefined'
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;
  const store = createReduxStore(reducer, composeEnhancers());

  return store;
}
