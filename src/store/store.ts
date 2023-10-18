import { create } from "zustand";
import { IProduct } from "../components/ProductList";

export interface IStore {
  cart: IProduct[];
  addToCart: (newProduct: IProduct) => void;
}
  
  // hook up to where button adds to console log

  const useProductStore = create<IStore>((set) => ({
    cart: [],
    addToCart: (newProduct: IProduct) => {
      return set((store: IStore) => {
        return {
          cart: [...store.cart, newProduct]
        }
      })
    }
  }));

  export default useProductStore