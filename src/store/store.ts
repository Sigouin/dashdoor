import { create } from "zustand";
import { IProduct } from "../components/ProductList";



interface IState {
    products: IProduct[];
  }
  
  const useProductStore = create((set) => ({
    products: [],
    addProduct: (newProduct: IProduct) =>
      set((state: IState) => ({
        products: [...state.products, newProduct],
      })),
  }));

  export default useProductStore