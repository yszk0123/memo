/**
 * @see https://github.com/zeit/next.js/issues/2284
 * @see https://github.com/zeit/next.js/issues/1827#issuecomment-306740374
 */
import Router from 'next/router';

const noopResolve = () => {
  return Promise.resolve();
};

const mockedRouter = {};

const proxy = new Proxy(mockedRouter, {
  get(target, name) {
    console.log(`Router.router.${name} is mocked`);
    return name in target ? target[name] : noopResolve;
  },
});

Router.router = proxy;
