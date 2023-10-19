import { create } from "zustand";
import { IProduct } from "../components/ProductList";

export interface IStore {
  cart: IProduct[];
  addToCart: (newProduct: IProduct) => void;
  updateQuantity: (name: string, dir: "up" | "down") => void;
}

  const useProductStore = create<IStore>((set) => ({
    // list of products in the cart
    cart: [],

    // methods to modify the cart
    addToCart: (newProduct: IProduct) => {
      return set((store: IStore) => {
        if( !!store.cart.find((item) => item.name === newProduct.name ) ) {
          store.updateQuantity(newProduct.name, 'up')

          return {
            cart: store.cart
          }
        } else {
          return {
            cart: [...store.cart, newProduct]
          }
        }
      })
    },
    updateQuantity: (name: string, dir: "up" | "down") => {
      return set((store: IStore) => {
        const updatedCart = [...store.cart]
        const productIndex = updatedCart.findIndex((item) => item.name === name);

        if (productIndex === -1) {
            return { cart: updatedCart}
        }
        
        const productToUpdate = updatedCart[productIndex];

        if (dir === "down" && productToUpdate.qty <= 1){
            if( window.confirm(`Are you sure you want to remove ${name}?`)) {
                updatedCart.splice(productIndex, 1)
            }
        } else {
            productToUpdate.qty += dir === "down" ? -1 : 1;
        }

        return { cart: updatedCart };
      })
    }
  }));

  export default useProductStore