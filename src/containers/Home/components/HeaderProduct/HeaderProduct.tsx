import { FC } from "react";
import ProductTitle from "../../../../components/ProductTitle/ProductTitle";
import ProductPrice from "../../../../components/ProductPrice/ProductPrice";
import ProductOffTitle from "../../../../components/ProductOffTitle/ProductOffTitle";
import NewPrice from "../../../../components/NewPrice/NewPrice";
import { Wrapper } from "./headerProductStyles";
import { imageUrl } from "../../../../api";
import SupportImage from "./../../../../components/SupportImage/SupportImage";

interface Props {
  product: ProductType;
}

const HeaderProduct: FC<Props> = ({ product }) => {
  const { image, title, price, offProduct } = product;
  const addOffToPrice = offProduct * price;
  const currentPrice = Math.floor(addOffToPrice / 100);

  return (
    <Wrapper to="/products">
      <header className="product__header">
        <ProductTitle title={title} />
        <NewPrice text={currentPrice} />
      </header>

      <SupportImage imgUrl={`${image.url}`} />
      <div className="product__footer">
        <ProductPrice text={price} />
        <ProductOffTitle title={offProduct} />
      </div>
    </Wrapper>
  );
};

export default HeaderProduct;
