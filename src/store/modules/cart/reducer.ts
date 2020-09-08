import { Reducer } from 'redux';
import produce from 'immer';
import { ICartState } from './types';

import { ADD_PRODUCT_TO_CART } from './actions';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { product } = action.payload;
      const productInCartIndex = state.items.findIndex((item) => item.product.id === product.id);

      if (productInCartIndex >= 0) {
        return produce(state, (draft) => {
          draft.items[productInCartIndex].quantity++;
        });
      } else {
        return produce(state, (draft) => {
          draft.items.push({
            product,
            quantity: 1,
          });
        });
      }
    }
    default: {
      return state;
    }
  }
};

export default cart;
