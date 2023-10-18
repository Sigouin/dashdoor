import { useState } from "react";
import { Box, Button } from "@mui/material";
import ShoppingCartItem from "./ShoppingCartItem";
import { PRODUCTS } from "../ProductList";

function ShoppingCart() {
  // Initialized to the constant for now until we can actually add products then <>
  const [products, setProducts] = useState(PRODUCTS);

  const updateQty = (productName: string, dir: "up" | "down") => {
    const updatedProducts = [...products];
    const idx = updatedProducts.findIndex((p) => p.name === productName);
    const qty = updatedProducts[idx].qty;

    if (dir === "up") {
      updatedProducts[idx].qty = qty + 1;
    } else {
      if (qty > 1) {
        updatedProducts[idx].qty = qty - 1;
      } else {
        if (
          window.confirm(
            `Are you sure you want to remove ${productName} from your cart?`
          )
        ) {
          updatedProducts.splice(idx, 1);
        }
      }
    }

    setProducts(updatedProducts);
  };

  return (
    <Box sx={{ width: 350 }} role="presentation">
      <h1>Your cart from Chick-fil-A</h1>
      <Button variant="contained">Checkout</Button>
      {products.map((item, i) => {
        return (
          <ShoppingCartItem
            product={item}
            updateQty={updateQty}
            key={`CartItem-${item.id}-${i}`}
          />
        );
      })}
    </Box>
  );
}

export default ShoppingCart;
