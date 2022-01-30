import { useEffect } from "react";
import User from "../../../../../../svg/User.svg";
import Cart from "../../../../../../svg/Cart.svg";
import { CartBtn, NavMenu, UserName } from "./menuItemsStyles";
import { useAuthStore, useCartStore } from "../../../../../../store/store";
import { NavLink } from "react-router-dom";

const MenuItems = () => {

  const user = useAuthStore((state) => state.user);
  const cartProducts = useCartStore((state) => state.cartProducts);
  const productsCounter = useCartStore((state) => state.productsCounter);

  const handleProductsCounter = useCartStore(
    (state) => state.handleProductsCounter
  );

  useEffect(() => {
    handleProductsCounter();
  }, [cartProducts]);

  return (
    <NavMenu>
      <li>
        <NavLink to="/panel">
          <img src={User} alt="user" />
          <UserName>{user !== undefined ? user.username : null}</UserName>
        </NavLink>
      </li>
      <CartBtn totalnumber={productsCounter.toString()}>
        
        <NavLink to="/cart" >
          <img src={Cart} alt="user" />
        </NavLink>
      </CartBtn>

      <li>
        <NavLink to="/products">Items</NavLink>
      </li>
    </NavMenu>
  );
};

export default MenuItems;
