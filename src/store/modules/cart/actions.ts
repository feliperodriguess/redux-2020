import { IProduct } from './types';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export function addProductToCart(product: IProduct) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      product,
    },
  };
}
