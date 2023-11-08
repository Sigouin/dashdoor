import useProductStore from "../../store/store";
import { Box, Button } from "@mui/material";
import ShoppingCartItem from "./ShoppingCartItem";
import "./ShoppingCart.css";

function ShoppingCart() {
  const cart = useProductStore((store) => store.cart);

  return (
    <Box sx={{ width: 350 }} role="presentation">
      <div className="cart">
        <span>Your cart from</span>
        <br></br>
        <strong>Chick-fil-A</strong>
      </div>
      <Button
        variant="contained"
        sx={{
          width: 1,
          borderRadius: "50px",
          bgcolor: "red",
          "&:hover": { backgroundColor: "red" },
        }}
      >
        Checkout
      </Button>
      {cart.length
        ? cart.map((item, i) => {
            return (
              <ShoppingCartItem
                product={item}
                key={`CartItem-${item.id}-${i}`}
              />
            );
          })
        : "Your cart is empty. Add items to get started."}
    </Box>
  );
}

export default ShoppingCart;
