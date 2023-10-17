import { IProduct } from "../ProductList";
import "./ShoppingCartItem.css";

interface IShoppingCartItemProps {
  product: IProduct;
  updateQty: (name: string, dir: "up" | "down") => void;
}

function ShoppingCartItem({ product, updateQty }: IShoppingCartItemProps) {
  const { name, img, description, price, qty } = product;

  const QuantityButton = () => {
    const update = (dir: "up" | "down") => {
      updateQty(name, dir);
    };

    return (
      <div>
        <button onClick={() => update("down")}>-</button>
        <div>{qty}</div>
        <button onClick={() => update("up")}>+</button>
      </div>
    );
  };

  return (
    <div className="product">
      <img className="product-image" src={img} alt={name} />
      <div className="product-detail-block">
        <strong className="product-name">{name}</strong>
        <p className="product-description">{description}</p>
        <strong className="product-price">{price}</strong>
      </div>
      <div>
        <QuantityButton />
      </div>
    </div>
  );
}

export default ShoppingCartItem;
