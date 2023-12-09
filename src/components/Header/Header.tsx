import dashdoor from "../../assets/dashdoor.png";
import cfa from "../../assets/cfa.png";
import DashDrawer from "../ShoppingCart/DashDrawer";

const Header = () => {
  return (
    <div className="header-container">
      <img className="dashdoor" src={dashdoor} alt="DashDoor"></img>
      <img className="logo" src={cfa} alt="Chick-Fil-A"></img>
      <DashDrawer />
    </div>
  );
};

export default Header;
