import styled from "styled-components";

export const Wrapper = styled.div``;

export const ResponsiveWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    margin-top:1rem;
    img {
      width: 100%;
    }
  }
`;

export const DesktopWrapper = styled.div`
  color: #fff;
  background-color: #40bfff;
  padding: 0 3rem;
  height: 300px;
  @media only screen and (max-width: 992px) {
  display:none;
  }
`;

export const RightDiv = styled.div`
  img {
    transform: translateY(-90px);
  }
`;

export const LeftDiv = styled.div`
  & h2 {
    font-size: 30px;
  }

  p {
    font-size: 14px;
  }

  a {
    color: #fff;
    position: relative;
    font-size: 12px;
    font-weight: 600;
    &::before {
      content: "";
      width: 50%;
      height: 2.5px;
      background-color: #fff;
      top: 130%;
      position: absolute;
    }
  }
`;
