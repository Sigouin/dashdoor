import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import ShoppingCartItem from "./ShoppingCartItem";

export interface IProduct {
  name: string;
  img: string;
  description: string;
  price: number;
  qty: number;
}

const PRODUCTS: IProduct[] = [
  {
    name: "Chick-fil-A® Chicken Sandwich",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1000,height=600,format=auto,quality=50/media/photos/19ccd1f1-5b6b-496a-96d7-4288448ea609-retina-large.jpg",
    description: "White Bun (Buttered)",
    price: 6.45,
    qty: 1,
  },
  {
    name: "nuggies",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1000,height=600,format=auto,quality=50/media/photos/b90bf4c3-bc23-4b1a-81d0-211ac7aea2fc-retina-large-jpeg",
    description: "#yummerz",
    price: 6.45,
    qty: 1,
  },
  {
    name: "fries",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1000,height=600,format=auto,quality=50/media/photos/4c10b699-bb52-4c17-b16e-c60f780db554-retina-large-jpeg",
    description: "#yummerz",
    price: 6.45,
    qty: 1,
  },
  {
    name: "sweat tea",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1000,height=600,format=auto,quality=50/media/photosV2/2556a45b-91a2-4a95-9ca1-a7a650036a3b-8a209be9-e197-4916-8fee-50fc60fe40c3-retina-large.JPG",
    description: "#yummerz",
    price: 6.45,
    qty: 1,
  },
];

function ShoppingCart() {
  // Initialized to the constant for now until we can actually add products then <>
  const [products, setProducts] = useState(PRODUCTS);

  const updateProduct = (product: IProduct) => {
    const newProducts = products.filter((p) => p.name !== product.name);

    setProducts([...newProducts, product]);
  };

  return (
    <Box sx={{ width: 350 }} role="presentation">
      <h1>Your cart from Chick-fil-A</h1>
      <Button variant="contained">Checkout</Button>
      {products.map((item) => {
        return (
          <ShoppingCartItem product={item} updateProduct={updateProduct} />
        );
      })}
    </Box>
  );
}

export default ShoppingCart;
