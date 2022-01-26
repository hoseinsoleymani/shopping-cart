import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f6f7f8;
  padding: 1.2rem;
  color: #22262a;

  span {
    color: #aaa;
    transition: 0.5s ease;
  }
  ol {
    margin: 0;
    padding: 0;
  }
  a {
    height: 45px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #22262a;
    transition: 0.5s ease;
    &:hover {
      color: #33a0ff;
      span {
        color: #33a0ff;
      }
    }
  }
`;
