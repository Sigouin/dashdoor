import "./App.css";
import Header from "./components/Header/Header";
import { ProductList } from "./components/ProductList";
import DashDrawer from "./components/ShoppingCart/DashDrawer";

function App() {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}

export { App };
