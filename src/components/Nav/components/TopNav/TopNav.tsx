import { useState } from "react";
import MenuItems from "./components/MenuItems/MenuItems";
import ChooseLanguage from "./components/ChooseLanguage/ChooseLanguage";
import {
  RightNav,
  Wrapper,
  LoginWrapper,
  ResponsiveItems,
  Cart,
  AmountBtns,
  CartInfo,
  EmptyCart,
} from "./topNavStyles";
import MenuItem from "../MenuItem/MenuItem";
import { useAuthStore, useCartStore } from "../../../../store/store";
import { AiOutlineBars } from "react-icons/ai";
import { CartBtn } from "./components/MenuItems/menuItemsStyles";
import { imageUrl } from "../../../../api";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Telescope from "../../../../images/Telescope.png";

interface Props {
  handleShowMenu: () => void;
}

const TopNav: React.FC<Props> = ({ handleShowMenu }) => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const {
    cartProducts,
    productsCounter,
    addToCart,
    removeCurrentProduct,
    removeFromCart,
  } = useCartStore();
  const [showCart, setShowCart] = useState(false);

  return (
    <Wrapper>
      <Cart showCart={showCart}>
        <h3>Your Cart</h3>

        {cartProducts.length === 0 ? (
          <EmptyCart src={Telescope} alt="Empty" />
        ) : (
          cartProducts.map((product) => (
            <div
              key={product.id}
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <img
                  src={`${imageUrl}${product.image.url}`}
                  alt={product.title}
                />

                <CartInfo>
                  <span>{product.title.slice(0, 10)}</span>
                  <h6>${product.price}</h6>

                  <button
                    type="button"
                    onClick={() => removeCurrentProduct(product)}
                  >
                    remove
                  </button>
                </CartInfo>
              </div>

              <AmountBtns>
                <button type="button" onClick={() => addToCart(product)}>
                  <IoIosArrowUp />
                </button>
                <span>{product.amount}</span>
                <button type="button" onClick={() => removeFromCart(product)}>
                  <IoIosArrowDown />
                </button>
              </AmountBtns>
            </div>
          ))
        )}
      </Cart>
      <ResponsiveItems>
        <li>
          <AiOutlineBars className="fa-bars" onClick={handleShowMenu} />
        </li>
        <CartBtn totalnumber={productsCounter.toString()}>
          <button
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.22974 21.7395C9.5404 21.7395 9.79224 21.4877 9.79224 21.177C9.79224 20.8663 9.5404 20.6145 9.22974 20.6145C8.91908 20.6145 8.66724 20.8663 8.66724 21.177C8.66724 21.4877 8.91908 21.7395 9.22974 21.7395Z"
                fill="#22262A"
                stroke="#22262A"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1047 21.7395C17.4154 21.7395 17.6672 21.4877 17.6672 21.177C17.6672 20.8663 17.4154 20.6145 17.1047 20.6145C16.7941 20.6145 16.5422 20.8663 16.5422 21.177C16.5422 21.4877 16.7941 21.7395 17.1047 21.7395Z"
                fill="#22262A"
                stroke="#22262A"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.04224 3.7395H5.29224L7.54224 17.2395H18.7922L21.0422 7.1145H6.41724"
                stroke="#22262A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </CartBtn>
      </ResponsiveItems>
      <ChooseLanguage />
      {isLogin ? (
        <RightNav className="d-flex">
          <MenuItems />
          <form>
            <input
              className="border-0 outline-0 w-100"
              type="text"
              placeholder="$0.00"
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="#f5f5f5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7072 19.4573L14.3992 13.1203C15.5309 11.5141 16.018 9.54149 15.764 7.59316C15.51 5.64483 14.5335 3.863 13.0278 2.60067C11.5222 1.33833 9.59726 0.687604 7.6345 0.777426C5.67174 0.867248 3.81434 1.69102 2.43027 3.08559C1.0462 4.48017 0.236448 6.34377 0.161474 8.30715C0.0865002 10.2705 0.751771 12.1905 2.02546 13.6865C3.29914 15.1826 5.08833 16.1457 7.03852 16.3849C8.98871 16.6242 10.9576 16.1221 12.5552 14.9783L18.8632 21.3163C18.9845 21.4403 19.1293 21.5389 19.2891 21.6064C19.4489 21.6739 19.6206 21.709 19.7941 21.7096C19.9676 21.7101 20.1394 21.6762 20.2997 21.6098C20.46 21.5434 20.6054 21.4458 20.7276 21.3227C20.8498 21.1995 20.9464 21.0533 21.0116 20.8925C21.0768 20.7318 21.1094 20.5597 21.1075 20.3862C21.1056 20.2127 21.0692 20.0413 21.0005 19.882C20.9317 19.7227 20.832 19.5777 20.7072 19.4573ZM8.01816 13.8153C6.97721 13.821 5.95798 13.5176 5.08967 12.9434C4.22135 12.3693 3.54303 11.5503 3.14069 10.5902C2.73835 9.63016 2.6301 8.57222 2.82966 7.55056C3.02921 6.5289 3.5276 5.58951 4.26163 4.8514C4.99567 4.11329 5.93231 3.60971 6.95286 3.4045C7.9734 3.1993 9.03189 3.30173 9.99418 3.69875C10.9565 4.09578 11.7792 4.76954 12.3581 5.63466C12.9371 6.49979 13.2461 7.51728 13.2462 8.55825C13.2462 9.94748 12.6963 11.2803 11.7167 12.2653C10.7371 13.2504 9.40738 13.8076 8.01816 13.8153Z"
                fill="#000"
              />
            </svg>
          </form>
        </RightNav>
      ) : (
        <LoginWrapper>
          <MenuItem link="/auth/login" text="Login" />
          <MenuItem link="/auth/register" text="Register" marginRNone={true} />
        </LoginWrapper>
      )}
    </Wrapper>
  );
};

export default TopNav;
