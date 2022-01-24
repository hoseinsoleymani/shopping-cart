import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  background-color: #fff;
  margin: 70px auto;
  border-radius: 11px;
  padding: 40px 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  h3 {
    text-align: center;
    color: #495d76;
  }

  p {
    color: #cecfd3;
    font-size: 13px;
    text-align: center;
    margin-top: 5px;
  }

  .user i,
  .pass i {
    position: relative;
    top: 31px;
    right: -10px;
    color: #3981ed;
  }
  /* button */

  button {
    width: 100%;
    border: none;
    height: 35px;
    background-color: #277ffd;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
    margin:1rem 0;
  }

  /* button */
  p.last {
    text-align: center;
    font-size: 12px;
  }

  .error {

  }
`;

export const RememberPass = styled.div`
display:flex;
align-items:center;
`

export const InputContainer = styled.div`

input {
    width: 100%;
    height: 35px;
    border: none;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    outline: none;
    padding: 0 20px;
    &::placeholder {
      color: #9ca5b4;
      font-size: 12px;
    }
  }

  margin-bottom:1rem;
`