import { FC } from "react";
import ProductTitle from "../ProductTitle/ProductTitle";
import NewPrice from "../NewPrice/NewPrice";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductOffTitle from "../ProductOffTitle/ProductOffTitle";
import { ProductImgLink, Wrapper } from "./ProductStyles";
import StarGray from "../../svg/Star-gray.svg";
import StarGold from "../../svg/Star-gold.svg";
import { imageUrl } from "../../api/index";
import SupportImage from "../SupportImage/SupportImage";
interface Props {
  product: ProductType;
}

const Product: FC<Props> = ({ product }) => {
  const { id, title, price, image, offProduct } = product;
  const addOffToPrice = offProduct * price;
  const currentPrice = Math.floor(price - Math.floor(addOffToPrice / 100));

  return (
    <Wrapper className="product">
      <ProductImgLink to={`/products/${id}`}>
        <SupportImage imgUrl={`${image.url}`} />
      </ProductImgLink>

      <footer>
        <ProductTitle title={title} />

        <div className="stars">
          <img src={StarGold} alt="Star" />
          <img src={StarGold} alt="Star" />
          <img src={StarGold} alt="Star" />
          <img src={StarGold} alt="Star" />
          <img src={StarGray} alt="Star" />
        </div>
        <div className="footer__product">
          <NewPrice text={currentPrice} />
          <div>
            <ProductPrice text={price} />
            <ProductOffTitle title={offProduct} />
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Product;
