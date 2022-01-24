import { FC, useEffect } from "react";
import { useAuthStore, useCartStore } from "../../../../store/store";
import {
  ProductDesc,
  ProductDetailsEl,
  Stars,
  ProductHeader,
  ProductBody,
  ProductSub,
  ProductFooter,
  RadioBtns,
  SocialBtns,
} from "./productDetailsStyles";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuLine } from "../../../Nav/navStyles";
import ProductTitle from "../../../ProductTitle/ProductTitle";
import ProductStar from "./../../../ProductStar/ProductStar";
import NewPrice from "./../../../NewPrice/NewPrice";
import ProductPrice from "./../../../ProductPrice/ProductPrice";
import ProductOffTitle from "./../../../ProductOffTitle/ProductOffTitle";
import RadioBtn from "./../../../RadioBtn/RadioBtn";
import ProductBtns from "./../../../ProductBtns/ProductBtns";
import { RiShoppingCartLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
interface Props {
  product: ProductType;
}

const ProductDetails: FC<Props> = ({ product }) => {
  const { price, title, offProduct } = product;
  const addToCart = useCartStore((state) => state.addToCart);
  const { isLogin } = useAuthStore();
  const { productAmount } = useCartStore();
  const navigate = useNavigate();


  return (
    <ProductDetailsEl>
      <ProductTitle title={title} />

      <ProductHeader className="d-flex align-items-center my-4">
        <Stars>
          <ProductStar isGold={true} />
          <ProductStar isGold={true} />
          <ProductStar isGold={true} />
          <ProductStar isGold={true} />
          <ProductStar />
        </Stars>

        <span>0 reviews</span>

        <NavLink to="/">Submit a review</NavLink>
      </ProductHeader>

      <MenuLine />

      <ProductBody className="my-4">
        <div className="d-flex align-items-center justify-content-between my-3">
          <NewPrice text={price} />
          <ProductPrice text={price} />
          <ProductOffTitle title={offProduct} />
        </div>

        <div className="d-flex align-items-center justify-content-between my-3">
          <ProductDesc>Availability:</ProductDesc>
          <ProductDesc>In stock</ProductDesc>
        </div>
        <div className="d-flex align-items-center justify-content-between my-3">
          <ProductDesc>Category:</ProductDesc>
          <ProductDesc>Accessories</ProductDesc>
        </div>

        <ProductDesc>Free shipping</ProductDesc>
      </ProductBody>

      <MenuLine />

      <ProductSub className="my-4">
        <div className="d-flex align-items-center justify-content-between my-3">
          <ProductDesc>Select Color:</ProductDesc>
          <RadioBtns className="d-flex">
            <RadioBtn color="royalblue" />
            <RadioBtn color="red" />
            <RadioBtn color="black" />
            <RadioBtn color="yellow" />
          </RadioBtns>
        </div>

        <div className="d-flex justify-content-between my-4">
          <ProductDesc>Size</ProductDesc>

          <select>
            <option value="xs">XS</option>
            <option value="sm">SM</option>
            <option value="md">MD</option>
            <option value="lg">LG</option>
          </select>
        </div>
      </ProductSub>

      <MenuLine />

      <ProductFooter className="d-flex align-items-center justify-content-between my-3">
        <ProductBtns product={product} productAmount={productAmount}/>

        <div className="d-flex">
          <button
            className="product-page__btn primary-btn button"
            onClick={() => {
              isLogin ? addToCart(product) : navigate("/auth/login");
            }}
          >
            <RiShoppingCartLine />
            Add To Cart
          </button>

          <button className="primary-btn button">S</button>
        </div>
      </ProductFooter>
      <MenuLine />

      <SocialBtns className="my-3 d-flex justify-content-between align-items-center">
        <button className="button">
          <GrFacebookOption size={20} />
          Share On Facebook
        </button>

        <button className="button">
          <BsTwitter size={18} />
          Share On Twitter
        </button>
      </SocialBtns>
    </ProductDetailsEl>
  );
};

export default ProductDetails;
