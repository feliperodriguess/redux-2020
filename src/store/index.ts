import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './modules/rootReducer';

import { ICartState } from './modules/cart/types';

export interface IState {
  cart: ICartState;
}

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
