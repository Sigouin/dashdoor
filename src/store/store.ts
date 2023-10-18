import { create } from "zustand";
import { IProduct } from "../components/ProductList";

export interface IStore {
  cart: IProduct[];
  addToCart: (newProduct: IProduct) => void;
}

  const useProductStore = create<IStore>((set) => ({
    // list of products in the cart
    cart: [],

    // methods to modify the cart
    addToCart: (newProduct: IProduct) => {
      return set((store: IStore) => {
        return {
          cart: [...store.cart, newProduct]
        }
      })
    }
  }));

  export default useProductStore