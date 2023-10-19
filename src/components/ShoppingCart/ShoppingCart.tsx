import useProductStore from "../../store/store";
import { Box, Button } from "@mui/material";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  const cart = useProductStore((store) => store.cart);

  return (
    <Box sx={{ width: 350 }} role="presentation">
      <h1>Your cart from Chick-fil-A</h1>
      <Button variant="contained">Checkout</Button>
      {cart.length
        ? cart.map((item, i) => {
            return (
              <ShoppingCartItem
                product={item}
                key={`CartItem-${item.id}-${i}`}
              />
            );
          })
        : "Nothing in cart. You gon be hooongray"}
    </Box>
  );
}

export default ShoppingCart;
