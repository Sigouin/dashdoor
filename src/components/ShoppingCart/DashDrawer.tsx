import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingCart from "./ShoppingCart";
import { ShoppingBasket } from "@mui/icons-material";

export default function DashDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false); // TODO: UNDO THIS!!!!

  // #For a11y
  const toggleDrawer = (isOpen: boolean) => {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(isOpen);
    };
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={toggleDrawer(true)}>
        <ShoppingBasket />
      </Button>
      <Drawer anchor={"right"} open={drawerOpen} onClose={toggleDrawer(false)}>
        <ShoppingCart />
      </Drawer>
    </div>
  );
}
