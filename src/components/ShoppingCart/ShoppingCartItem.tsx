import useProductStore from "../../store/store";
import { IProduct } from "../ProductList";
import "./ShoppingCartItem.css";
import AddIcon from "@mui/icons-material/Add";

interface IShoppingCartItemProps {
  product: IProduct;
}

function ShoppingCartItem({ product }: IShoppingCartItemProps) {
  const { name, img, description, price, qty } = product;

  const updateQuantity = useProductStore((store) => store.updateQuantity);

  const QuantityButton = () => {
    const update = (dir: "up" | "down") => {
      updateQuantity(name, dir);
    };

    return (
      <div className="counter">
        <button onClick={() => update("down")}>-</button>
        <div>{qty}x</div>
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
