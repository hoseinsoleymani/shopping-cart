import styled from "styled-components";

export const ProductBtnsEl = styled.div`
  display: flex;
  align-items: center;

  & * {
    height: 46px;
    width: 46px;
    background-color: #f6f7f8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
  }

  & button {
    color: #33a0ff;
    font-weight: bold;
    font-size: 20px;
  }
`;
