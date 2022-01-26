import styled from "styled-components";

export const HeadSection = styled.section`
  margin-top: 3rem;

  article {
    margin-bottom: 2rem;
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
    font-weight:500;
    font-size:14px;
  }
`;
