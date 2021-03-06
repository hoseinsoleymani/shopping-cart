import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f6f7f8;
  height: 57px;
  margin: 1rem 0;
  padding-left: 1rem;
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 550px;
    flex-grow: 1;
  }
  > div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  select {
    outline: none;
    cursor: pointer;
    border: 3px solid #f1f3f4;
    width: 130px;
    height: 38px;
    background: transparent;
    border-radius: 5px;
    margin-left: 1rem;
  }

  @media only screen and (max-width: 768px) {
    span {
      display: none;
    }

    select {
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: 475px) {
    img {
      display: none;
    }
    select {
      margin: 0;
    }
  }

  @media only screen and (max-width: 350px) {
    select {
      width: 120px;
    }
  }
`;

export const TemplateBtn = styled.div`
  cursor: pointer;
`;
