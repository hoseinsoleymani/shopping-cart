import styled from "styled-components";

export const Tab = styled.div`
  background-color: #fafafb;
  border-radius: 5px;
  margin-top: 2rem;
`;

export const TabHeader = styled.div`
  height: 90px;
  padding-left: 2rem;
  display: flex;
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5rem;
    font-size: 18px;
    color: #262626;
    transition: 0.5s ease;
    height: 90px;
    & span {
      color: #ddd;
      margin-left: 0.5rem;
    }
    border-bottom: 4.8px solid transparent;
  }

  & > button.active {
    color: #2e90e5;
    border-bottom-color: #2e90e5;
  }
  border-bottom: 4.8px solid #e5e8ea;
`;

export const TabBody = styled.div`
  & p {
    color: #9098b1;
    font-size: 14px;
    max-width: 760px;
    word-spacing: 3px;
  }
`;

export const TabBodyContainer = styled.div`
  padding: 2rem;
  height:301px;
  overflow-y:auto;
`;
