import styled from "styled-components";


export const InputContainer = styled.div`
display:flex;
flex-direction:column;
& input {
    border:1px solid #969393;
    color:#373737;
    padding:1.2rem 1.5rem;    
    border-radius:7px;
    outline:none;
}

& label {
    margin-bottom:0.5rem;
}
`;
