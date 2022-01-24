import { FC } from "react";
import { useNavigate } from "react-router";
import { useAuthStore, useCartStore } from "../../store/store";
import { ProductBtnsEl } from "./productBtnsStyles";

interface Props {
  product: ProductType;
  productAmount?: number;
}

const ProductBtns: FC<Props> = ({ product, productAmount }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const { isLogin } = useAuthStore();
  const navigate = useNavigate();
  return (
    <ProductBtnsEl>
      <button
        type="button"
        onClick={() => {
          isLogin ? removeFromCart(product) : navigate("/auth/login");
        }}
      >
        -
      </button>
      <span className="item__text">
        {product.amount ? product.amount : productAmount}
      </span>
      <button
        type="button"
        onClick={() => {
          isLogin ? addToCart(product) : navigate("/auth/login");
        }}
      >
        +
      </button>
    </ProductBtnsEl>
  );
};

export default ProductBtns;
