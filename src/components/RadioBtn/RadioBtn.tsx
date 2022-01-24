import { FC, useState } from "react";
import { RadioBtnEl } from "./radioBtnStyles";

interface Props {
  color?: string;
}

const RadioBtn: FC<Props> = ({ color }) => {
  return (
    <RadioBtnEl color={color}>
      <input type="radio" name="radio" />
      <span className="checkmark"></span>
    </RadioBtnEl>
  );
};

export default RadioBtn;
