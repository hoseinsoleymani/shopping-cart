import styled from "styled-components";

export const BreadcrumbWrapper = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 0.4rem 0;
  button {
    font-size:18px;
    text-decoration:none;
  }
  & li {
    display: flex;
    align-items: center;
  }
`;
