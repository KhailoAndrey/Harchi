import styled from "styled-components";

export const ButtonStyled = styled.button`
background: ${props => props.backgroundcolor};
color: ${props => props.textcolor};
display: flex;
height: 48px;
padding: 16px 30px;
align-items: center;
gap: 8px;
border-radius: 30px;
font-family: El Messiri;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 100%; 
/* min-width: fit-content; */
max-width: fit-content;
`