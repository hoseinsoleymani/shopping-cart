import { FC } from "react";
import { useCartStore } from "../../../../store/store";

interface Props {
  text: string;
}

const FilterBtn: FC<Props> = ({ text }) => {
  const handleFilterProduct = useCartStore(
    (state) => state.handleFilterProduct
  );
  return <button onClick={() => handleFilterProduct(text)}>{text}</button>;
};

export default FilterBtn;
