import { create } from "zustand";
import "./App.css";
import DashDrawer from "./components/ShoppingCart/DashDrawer";
import { IProduct } from "./components/ShoppingCart/ShoppingCart";

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

function App() {
  return (
    <div>
      <DashDrawer />
    </div>
  );
}

export { App, useProductStore };
