import styled from "styled-components";

export const Wrapper = styled.div`
  .product__image-list {
    display: flex;
    align-items: center;
    margin-top:8rem;
    & img {
      width: 85px;
    }

    & > div {
      width: 100px;
      height: 80px;
      display: flex;
      cursor:pointer;
      border:3px solid #ddd;
      align-items: center;
      justify-content: center;
      background-color: #f6f6f6;
      margin: 0 0.4rem;
    }
  }
`;

export const ProductImageEl = styled.div`

`