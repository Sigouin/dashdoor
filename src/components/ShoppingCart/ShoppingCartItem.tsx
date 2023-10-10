interface ShoppingCartItemProps {
    itemName: string
}

function ShoppingCartItem(props: ShoppingCartItemProps){
    return <div>{props.itemName}</div>;
};

export default ShoppingCartItem;
