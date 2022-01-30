import styled from "styled-components";

export const Wrapper = styled.div`
  .product__image-list {
    display: flex;
    align-items: center;
    margin-top: 8rem;
    & img {
      width: 85px;
    }

    & > div {
      width: 100px;
      height: 80px;
      display: flex;
      cursor: pointer;
      border: 3px solid #ddd;
      align-items: center;
      justify-content: center;
      background-color: #f6f6f6;
      margin: 0 0.4rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    overflow-x:auto;  
  }

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    .product__image-list {
      display: none;
    }
  }
`;

export const ProductImageEl = styled.div``;
