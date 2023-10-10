import { Button } from "@mui/material";
import ShoppingCartItem from "./ShoppingCartItem";

const PRODUCTS: string[] = [
    "sandmich",
    "nuggies",
    "fries",
    "purple drank"
];

const RenderItems = () => {
    return (
        <>
            {PRODUCTS.map((item) => {
                return <ShoppingCartItem itemName={item} />
            })}
        </>
    )
};

function ShoppingCart(){
    return (
        <div>
            <h1>Your cart from Chick-fil-A</h1>
            <Button variant="contained">Checkout</Button>
            <RenderItems />
        </div>
    )
};

export default ShoppingCart;