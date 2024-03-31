import styled  from "styled-components";
import register from "../../../public/modalRegister/register.png"

export const RegisterModal = styled.div`
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  width: 1036px;
  height: 849px;
  border-radius: 12px;
  background-size: cover;
  background-image: url('${register}');  
  overflow-y: auto;
`

export const Div = styled.div`
width: 427px;
height: 780px;
margin-top: 34px;
margin-left: 48px;
padding: 32.5px 32px 32.5px 32px;
gap: 24px;
opacity: 0px;
border-radius: 4px;
background: #403F3FB2;
overflow-y: auto;
`;

export const Title = styled.p`
font-family: KyivType Sans;
font-size: 32px;
font-weight: 700;
line-height: 42px;
letter-spacing: 0em;
text-align: center;
color: #FBF8F6;
`;

