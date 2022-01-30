import styled from "styled-components";

export const CurrentDataTitle = styled.p`
  font-size: 3rem;
  text-align: center;
  height: 300px;
  padding-top: 3rem;
`;

export const Wrapper = styled.div`
  @media only screen and (max-width: 992px) {
    .left_container {
      justify-content: flex-start;
    }
    .left_container img {
      margin-left: 2rem;
    }
    .left_container span:last-child {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    .right-container > span {
      display: none;
    }
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  height: 100px;
  border-bottom: 3px solid #f6f7f8;
  span {
    font-size: 20px;
    color: #22262a;
  }

  .header-left__title,
  .header-right__title {
    display: flex;
    align-items: center;
    max-width: 450px;
    flex-grow: 1;
    justify-content: space-between;
  }

  .header-left__title {
    max-width: 400px;
  }

  .header-left__title span {
    text-align: center;
    display: block;
    width: 100%;
  }
`;
