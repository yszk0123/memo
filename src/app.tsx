import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppPage } from './components/pages/AppPage';
import { createStore } from './redux/store';

function main() {
  const store = createStore();

  const rootElement = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <AppPage />
    </Provider>,
    rootElement,
  );
}

main();
