import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    padding: 0;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
    
    & div:first-child,
    & div:nth-child(2) {
      display: none;
    }

    & div:last-child {
      direction:rtl;
    }

    li {
      margin: 1.5rem 0;
    }

    a {
      font-size:1rem;
    }

    h3 {
      font-size: 1.3rem
    }
  }
`;
