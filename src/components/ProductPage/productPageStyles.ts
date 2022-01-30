import styled from "styled-components";

export const Wrapper = styled.div`
@media only screen and (max-width: 1400px) {
  article {
    width: 250px;
    margin-left: 1rem;
  }
}
@media only screen and (max-width: 1200px) {
  article {
    width: 205px;
    margin-left: 1rem;
  }
 }
  @media only screen and (max-width: 992px) {
    article {                                                                                            
      width: 100%;
      margin-left: 1rem;
    }
  }
`;

export const ProductsContainer = styled.div`
  @media only screen and (max-width: 992px) {
    h3 {
      white-space: nowrap;
    }

    article {
      transform: scale(0.95);
    }
  }
`;
