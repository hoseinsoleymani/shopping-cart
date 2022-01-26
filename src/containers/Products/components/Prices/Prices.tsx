import FilteringTitle from "./../FilteringTitle/FilteringTitle";
import { PricesEl, Wrapper } from "./pricesStyles";

const Prices = () => {
  return (
    <Wrapper>
      <FilteringTitle title="PRICES" />

      <div>
        <span>Ranger:</span>
        <PricesEl>
          <span>0</span>
          <span>0</span>
        </PricesEl>
      </div>
      <input type="range" />
    </Wrapper>
  );
};

export default Prices;
