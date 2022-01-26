import { Title } from "./filteringTitleStyles";

interface Props {
  title: string;
}

const FilteringTitle: React.FC<Props> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default FilteringTitle;
