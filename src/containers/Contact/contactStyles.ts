import styled from "styled-components";

export const ContactBox = styled.form`
  display: flex;
  box-shadow: 0 0 10px #ddd;
  margin: 8rem 0;
  color:#fff;

  & h2 {
    max-width: 340px;
    justify-content:center;
    font-size:40px;
    transform:translateY(115px);
  }

  & > div {
    width: 50%;
  }

  & input {
    margin-bottom: 2rem;
  }

  & label {
    margin-bottom: 0.5rem;
  }

  .message__container textarea {
    border: 1px solid #969393;
    color: #373737;
    padding: 1rem;
    border-radius: 7px;
    outline: none;
    height: 230px;
    resize:none;
  }


 & button {
    background-color: #33A0FF;
    color:#fff;
    padding:0.7rem;
    display:block;
    margin-top:2rem;
    width:140px;
    border-radius:5px;
  }
`;

export const LeftDiv = styled.div`
  background-color: #40bfff;

  & > div {

  }
`;

export const RightDiv = styled.div`
  padding: 4rem;
`;
