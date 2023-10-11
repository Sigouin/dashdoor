import { MouseEvent, useState } from "react";
import { IProduct } from "./ShoppingCart";
import "./ShoppingCartItem.css";

interface IShoppingCartItemProps {
  product: IProduct;
  updateProduct: (product: IProduct) => void;
}

interface IQuantityButtonProps {
  quantity: number;
}

function ShoppingCartItem({ product, updateProduct }: IShoppingCartItemProps) {
  const { name, img, description, price, qty } = product;

  const QuantityButton = ({ quantity }: IQuantityButtonProps) => {
    const [q, setQ] = useState(quantity);

    function updateQ(dir: "inc" | "dec") {
      dir === "inc" ? setQ(q + 1) : setQ(q - 1);

      updateProduct({
        ...product,
        qty: q,
      });
    }

    return (
      <div>
        <button onClick={() => updateQ("dec")}>-</button>
        <div>{q}</div>
        <button onClick={() => updateQ("inc")}>+</button>
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
        <QuantityButton quantity={qty} />
      </div>
    </div>
  );
}

export default ShoppingCartItem;
