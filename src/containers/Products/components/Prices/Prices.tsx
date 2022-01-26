import FilteringTitle from "./../FilteringTitle/FilteringTitle";
import { PricesEl, Wrapper } from "./pricesStyles";
import { useCartStore } from "../../../../store/store";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Prices: React.FC<Props> = ({ ...props }) => {
  const { handleFilterPriceProducts, priceRange } = useCartStore();

  return (
    <Wrapper>
      <FilteringTitle title="PRICES" />

      <PricesEl>
        <span>Ranger:</span>
        <div>
          <span>${priceRange}</span>-<span>$2500</span>
        </div>
      </PricesEl>
      <input
        type="range"
        {...props}
        onChange={handleFilterPriceProducts}
        defaultValue={priceRange}
        max="2500"
      />
    </Wrapper>
  );
};

export default Prices;
