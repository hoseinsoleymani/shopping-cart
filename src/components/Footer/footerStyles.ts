import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: #bcddfe;
  padding-top: 10rem;
  padding-bottom: 3rem;

  .line__footer {
    width: 100%;
    height: 2px;
    background-color: #fff;
    margin-top: 4rem;
  }

  .footer__brands {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 2rem 0;
    img {
      margin: 0 1rem;
    }

    img:last-child {
      margin-right: 0;
    }
  }

  & > div > div:first-child img {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 2rem;

    img {
      display: inline;
    }
  }
`;
