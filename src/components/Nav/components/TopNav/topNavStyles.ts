import styled from "styled-components";

interface Props {
  showCart: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  & form {
    background-color: #f5f5f5;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
    padding: 0 1rem;
    margin-left: 1rem;
    & input {
      padding: 0.6rem 0;
      outline: none;
      background-color: transparent;
    }
  }

  .fa-bars {
    display: none;
    cursor: pointer;
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    direction: rtl;

    ul,
    select {
      display: none;
    }

    .fa-bars {
      display: block;
      color: #9098b1;
    }

    form {
      border-radius: 5px;
      background-color: transparent;
      border: 2px solid #ebf0ff;
      width: 100%;
      input {
        direction: ltr;
        margin-left: 0.5rem;
      }

      svg path {
        fill: #40bfff;
      }
    }
  }
`;

export const RightNav = styled.div`
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ResponsiveItems = styled.ul`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex !important;
    justify-content: space-between;
    padding-left: 0.5rem;
    max-width: 300px;
    flex-grow: 1;
    margin: 0;

    svg {
      margin: 0 0.5rem;
      width: 28px;
      height: 28px;
    }
  }
`;

export const Cart = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: fixed;
  transition: 0.5s ease;
  top: 0;
  direction: ltr !important;
  left: ${({ showCart }) => (showCart ? "0" : "-350px")};
  width: 350px;
  bottom: 0;
  background-color: #f5f5f5;
  height: 100%;
  box-shadow: 0 0 10px #000;
  z-index: 9999;
  padding: 1rem;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  img {
    width: 120px;
  }

  > div {
    display: flex;
  }

  @media only screen and (max-width: 500px) {
    left: ${({ showCart }) => (showCart ? "0" : "-250px")};
    width: 250px;
  }

  // button {
  //   padding: 1rem 3rem;
  //   text-transform: uppercase;
  //   letter-spacing: var(--mainSpacing);
  //   font-size: 1rem;
  //   background: var(--primaryColor);
  //   color: var(--mainBlack);
  //   border: 1px solid var(--primaryColor);
  //   transition: var(--mainTransition);
  //   cursor: pointer;
  // }
`;

export const AmountBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    color: royalblue;
  }
`;

export const CartInfo = styled.div`
  padding-left: 1rem;

  font-size: 0.85rem;

  h6 {
    font-size: 0.85rem;
  }

  button {
    color: grey;
  }
`;

export const EmptyCart = styled.img`
  margin: 1rem auto;
  width: 200px !important;

  @media only screen and (max-width: 500px) {
  width: 150px !important;
  }
`;
