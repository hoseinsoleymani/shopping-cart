import styled from "styled-components";

export const HeadSection = styled.section`
  margin-top: 3rem;

  article {
    margin-bottom: 2rem;
    width: 306px;
  }

  @media only screen and (max-width: 1400px) {
    article {
      width: 260px;
    }
  }

  @media only screen and (max-width: 768px) {
    article {
      width: auto;
      max-width: 240px;
    }
  }

  @media only screen and (max-width: 576px) {
    article {
      width: 240px;
      max-width: none;
    }

    article h3 {
      overflow: hidden;
      white-space: nowrap;
    }

    .products__list {
      overflow-x: auto;
      margin: 1rem 0;
      padding: 1rem 0;
      flex-wrap: nowrap;
    }
  }
`;

export const FilterWrapper = styled.div`
  & > div:nth-last-child(2) {
    margin-top: 1rem;
  }

  & > a {
    background-color: #f6f7f8;
    color: #22262a;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    height: 56px;
    font-weight: 500;
    font-size: 14px;
  }
`;
