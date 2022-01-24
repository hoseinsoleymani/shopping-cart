import { FC } from "react";
import StarGray from "../../svg/Star-gray.svg";
import StarGold from "../../svg/Star-gold.svg";

interface Props {
  isGold?: boolean;
}

const ProductStar: FC<Props> = ({ isGold }) => {
  return (
    <>
      <img src={`${isGold ? StarGold : StarGray}`} alt="Star" />
    </>
  );
};

export default ProductStar;
