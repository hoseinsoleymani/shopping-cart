import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;

  @media only screen and (max-width:768px) {
    padding: 0 !important;
    background-color:transparent;
    img {
      display:none;
    }
  }
`;
