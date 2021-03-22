import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as portfolioReducer } from '../ducks/portfolio';

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

const asyncFunctionMiddleware = storeAPI => next => action => {
  if (typeof action === 'function') {
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  return next(action);
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(asyncFunctionMiddleware),
);

const store = createStore(rootReducer, enhancer);

export default store;
