import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import useProductStore from "../../store/store";
import "./ProductList.css";

export interface IProduct {
  name: string;
  img: string;
  description: string;
  price: number;
  qty: number;
  id: number;
}

interface IProductProps {
  product: IProduct;
}

export const PRODUCTS: IProduct[] = [
  {
    name: "Chick-fil-A® Chicken Sandwich",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1000,height=600,format=auto,quality=50/media/photos/19ccd1f1-5b6b-496a-96d7-4288448ea609-retina-large.jpg",
    description: "White Bun (Buttered)",
    price: 6.45,
    qty: 1,
    id: 1,
  },
  {
    name: "Chick-fil-A® Nuggets",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1000,height=600,format=auto,quality=50/media/photos/b90bf4c3-bc23-4b1a-81d0-211ac7aea2fc-retina-large-jpeg",
    description: "8 ct Chick-fil-A® Nuggets",
    price: 6.49,
    qty: 1,
    id: 2,
  },
  {
    name: "Chick-fil-A Waffle Potato Fries®",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1000,height=600,format=auto,quality=50/media/photos/4c10b699-bb52-4c17-b16e-c60f780db554-retina-large-jpeg",
    description: "Medium Chick-fil-A Waffle Potato Fries®",
    price: 6.45,
    qty: 1,
    id: 3,
  },
  {
    name: "Freshly-Brewed Iced Tea Sweetened",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1000,height=600,format=auto,quality=50/media/photosV2/2556a45b-91a2-4a95-9ca1-a7a650036a3b-8a209be9-e197-4916-8fee-50fc60fe40c3-retina-large.JPG",
    description: "Medium Freshly-Brewed Iced Tea Sweetened",
    price: 2.89,
    qty: 1,
    id: 4,
  },
];

// reimplement quantity update
// finish css for everything

const Product = (props: IProductProps) => {
  const addToCart = useProductStore((store) => store.addToCart);

  const handleProductAdd = () => {
    addToCart(props.product);
  };

  return (
    <div className="product__list">
      <Card sx={{ width: 180 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.product.img}
          title={props.product.name}
        />
        <CardContent>
          <Typography>{props.product.name}</Typography>
          <Typography>{props.product.price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleProductAdd}>Add to cart</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export const ProductList = () => {
  return (
    <>
      <div className="product__list container">
        {PRODUCTS.map((data, i) => {
          return <Product product={data} key={`product-${data.id}-${i}`} />;
        })}
      </div>
    </>
  );
};
