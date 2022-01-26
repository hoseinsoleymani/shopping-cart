import { FC, useState } from "react";
import { RadioBtnEl } from "./radioBtnStyles";

interface Props {
  color: string;
}

const RadioBtn: FC<Props> = ({ color }) => {
  const [active, setActive] = useState(false);
  return (
    <RadioBtnEl
      color={color}
      active={active}
      onClick={() => {
        setActive(!active);
      }}
    ></RadioBtnEl>
  );
};

export default RadioBtn;
