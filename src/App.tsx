import "./App.css";
import { ProductList } from "./components/ProductList";
import DashDrawer from "./components/ShoppingCart/DashDrawer";

function App() {
  return (
    <div>
      <ProductList />
      <DashDrawer />
    </div>
  );
}

export { App };
