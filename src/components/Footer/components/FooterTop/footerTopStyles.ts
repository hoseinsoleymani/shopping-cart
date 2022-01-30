import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-child img{
    margin-bottom:2rem;
  }

  @media only screen and (max-width: 768px) {
    display:none;
  }
`;
