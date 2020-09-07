export interface IProduct {
  id: Number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: object;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
