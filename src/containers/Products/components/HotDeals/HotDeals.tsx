import { Wrapper } from "./hotDealsStyles";
import FilteringTitle from "./../FilteringTitle/FilteringTitle";

export interface PopularDeals {
  title: string;
  quantity: number;
  id: number;
}

interface Props {
  hotDeals: PopularDeals[];
  title: string;
}

const HotDeals: React.FC<Props> = ({ hotDeals, title }) => {
  return (
    <Wrapper>
      <FilteringTitle title={title} />
      <ol>
        {hotDeals.map((item) => (
          <li key={item.id}>
            <a href="#">
              {item.title}
              <span>{item.quantity}</span>
            </a>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export default HotDeals;
