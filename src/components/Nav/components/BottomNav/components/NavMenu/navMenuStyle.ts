import styled from "styled-components";

interface Props {
  showMenu: boolean;
}

export const MenuDesktopWrapper = styled.ul`
  display: flex;
  align-items: center;

  & li:last-child {
    margin-right: 0;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Wrapper = styled.div``;

export const MenuResponsiveWrapper = styled.ul<Props>`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    width: 250px;
    top: 0;
    bottom: 0;
    left: ${({ showMenu }) => (showMenu ? "0" : "-270px")};
    height: 100%;
    background-color: #fff;
    box-shadow: 15px 0px 5px rgb(0 0 0 / 30%);
    box-shadow: 15px 0px 5px rgb(0 0 0 / 30%);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    font-weight: 500;
    overflow: auto;
    z-index: 9999999;
    -webkit-transition: all 0.5s cubic-bezier(0.68, 0.55, 0.265, 1.55) !important;
    -o-transition: all 0.5s cubic-bezier(0.68, 0.55, 0.265, 1.55) !important;
    transition: all 0.5s cubic-bezier(0.68, 0.55, 0.265, 1.55) !important;
    padding: 0 !important;

    li {
      margin: 0 0 0 1.5rem;
    }
    li:last-child {
      width: 80%;
      margin-top: 1rem;
    }
    li:last-child a {
      display: block;
      padding: 0;
      height: 40px;
      width: 100%;
      background-color: #1b274c;
      color: #fff;
      border-radius: 5px;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    a {
      padding-right: 1.5rem;
      color: #1b274c;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-weight: 500;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 17px;
    }

    a svg {
      font-size: 20px;
    }

    h2 {
      width: 100%;
      font-size: 1.4rem;
      letter-spacing: 1px;
      border-bottom: 1px solid #70707033;
      padding: 1rem 0 0.7rem 1.5rem;
      color: #1b274c;
      font-weight: Bold;
    }
  }
`;
