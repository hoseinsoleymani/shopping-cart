import styled from "styled-components";

export const ProductDetailsEl = styled.article`
  h3 {
    max-width: none;
    font-size: 24px;
  }
`;

export const ProductDesc = styled.span`
  color: #262626;
  font-size: 15px;
  font-weight: 500;
`;

export const Stars = styled.div``;

export const ProductHeader = styled.div`
  & span {
    color: #c1c8ce;
    font-size: 16px;
    margin: 0 1rem;
  }

  a {
    color: #33a0ff;
    font-size: 16px;
  }

  img {
    margin: 0 0.2rem;
  }
`;

export const ProductBody = styled.div`
  max-width: 235px;
`;

export const ProductSub = styled.div`
  max-width: 300px;
  & select {
    border: 2px solid #ddd;
    width: 123px;
    height: 40px;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
  }
`;

export const ProductFooter = styled.div`
  & .primary-btn {
    background-color: #33a0ff1a;
    color: #33a0ff;
    font-size: 16px;
    height: 46px;
    border-radius: 5px;
  }

  & > div {
    max-width: 220px;
    flex-grow: 1;
  }

  & .primary-btn:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  & .primary-btn:last-child {
    width: 30%;
    margin-left: 1rem;
  }
`;

export const RadioBtns = styled.div`
  & div:last-child {
    margin-right: 0;
  }
`;

export const SocialBtns = styled.div`
  & button {
    flex-grow: 1;
    margin: 0 0.5rem;
    border-radius: 5px;
    color: #fff;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 16px;
  }

  & button:last-child {
    background-color: #03a9f4;
  }

  & button:first-child {
    background-color: #385c8e;
  }
`;
