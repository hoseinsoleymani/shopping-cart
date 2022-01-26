import FilteringTitle from "./../FilteringTitle/FilteringTitle";
import RadioBtn from "./../../../../components/RadioBtn/RadioBtn";
import { Wrapper } from './colorStyles';
const Color = () => {
  return (
    <Wrapper>
      <FilteringTitle title="COlOR" />

      <div>
        <RadioBtn color="#006CFF" />
        <RadioBtn color="#FC3E39" />
        <RadioBtn color="#000" />
        <RadioBtn color="#FFF600" />
        <RadioBtn color="#FF00B4" />
        <RadioBtn color="#EFDFDF" />
      </div>
    </Wrapper>
  );
};

export default Color;
