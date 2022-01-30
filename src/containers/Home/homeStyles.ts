import styled from "styled-components";

export const Main = styled.main`
  h2 {
    margin: 2rem 0;
  }

  .header__products {
    display: flex;
    margin-top: -100px;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }

  .custom-container {
    max-width: 1320px;
    margin: 0 auto;
  }

  .header-products__container {
    max-width: 1320px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 992px) {
    .header__products {
      margin: 0;
      flex-wrap: nowrap;
      overflow-x: auto;
    }
  }
`;

export const ProductsList = styled.section`
  .row > div {
    margin: 1rem 0;
  }
`;

export const ProductsEl = styled.div`
  margin: 2rem 0;
  > div {
    margin-bottom:1rem;
  }
  @media only screen and (max-width: 992px) {
    overflow-x: auto;
    padding: 2rem 0;
  }
  
`;
