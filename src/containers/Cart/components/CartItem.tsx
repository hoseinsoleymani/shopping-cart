import { FC } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { Wrapper } from "./cartItemStyles";
import { useCartStore } from "../../../store/store";
import ProductBtns from "../../../components/ProductBtns/ProductBtns";
import { imageUrl } from "../../../api";

interface Props {
  product: ProductType;
}

const CartItem: FC<Props> = (product) => {
  const { title, price, image, amount } = product.product;

  const removeCurrentProduct = useCartStore(
    (state) => state.removeCurrentProduct
  );

  return (
    <Wrapper>
      <div className="left_container">
        <button
          className="item__remove-btn"
          onClick={() => removeCurrentProduct(product.product)}
        >
          <FaRegTimesCircle />
        </button>

        <img
          src={`${imageUrl}${image.url}`}
          alt={title}
          className="item__img-btn"
        />

        <span className="item__text">{title}</span>
      </div>

      <div className="right-container">
        <span className="item__text">{Math.floor(price * amount)}$</span>

        <ProductBtns product={product.product} />

        <span className="item__text">{price}$</span>
      </div>
    </Wrapper>
  );
};

export default CartItem;
