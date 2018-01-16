import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
// import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux/reducers';
import rootSaga from '../redux/sagas';

const isProduction = process.env.NODE_ENV === 'production';

// Creating store
export default () => {
  let store = null;
  const sagaMiddleware = createSagaMiddleware();
  let middleware = null;

  if (isProduction) {
    // In production adding only thunk middleware
    middleware = applyMiddleware(sagaMiddleware);
  } else {
    // In development mode beside thunk
    // logger and DevTools are added
    // middleware = applyMiddleware(sagaMiddleware, logger);
    middleware = applyMiddleware(sagaMiddleware);

    // Enable DevTools if browser extension is installed
    if (!process.env.SERVER_RENDER && window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
      middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
      );
    }
  }

  store = createStore(
    rootReducer,
    middleware
  );

  sagaMiddleware.run(rootSaga);


  return store;
};
