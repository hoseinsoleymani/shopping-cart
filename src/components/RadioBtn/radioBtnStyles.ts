import styled from "styled-components";

interface Props {
  color: string;
  active?: boolean;
}

export const RadioBtnEl = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
  border: ${({ active }) => (active ? "3px solid #f6f7f8" : "0")};
  box-shadow: ${({ active, color }) =>
    active ? `0 0 0px 2px ${color}` : `0 0 5px 1px ${color}`};
`;
