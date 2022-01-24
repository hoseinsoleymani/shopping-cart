import styled from "styled-components";

interface Props {
  color?: string;
}

export const RadioBtnEl = styled.div<Props>`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  & input ~ .checkmark {
    background-color: ${({ color }) => color};
  }

  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  & input ~ .checkmark:after {
    display: block;
  }
`;
