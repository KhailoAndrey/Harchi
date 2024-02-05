import styled from 'styled-components';

export const Item = styled.li`
width: 302px;
height: 398px;
flex-direction: column;
transition: 1s;
&:hover {
    transform: scale(1.05);
  }
`;
export const Link = styled.a`
cursor: pointer;
color: #111110;
style: none;
`

export const Photo = styled.img`
width: 302px;
height: 220px;

`;

export const Title = styled.p`
font-family: El Messiri;
font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
margin: 18px 0 12px;
`;

export const Describe = styled.span`
font-family: El Messiri;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
`;

export const InfoCont = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 12px 0 24px;
`
export const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2px;
`

export const Time = styled.p`
font-family: El Messiri;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
height: 19px;
margin-top: 3px;
`


export const Difficulty = styled.p`
font-family: El Messiri;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
height: 19px;
margin-top: 3px;
`
export const Button = styled.button`
background: inherit;
border-radius: 10px;
border: 0;
`

export const OwnerPhoto = styled.img`
width: 40px;
height: 40px;
border-radius: 10px;
`

export const Owner = styled.p`
font-family: El Messiri;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
color: #111110;
display: inline;
`

export const Category = styled.p`
font-family: El Messiri;
font-size: 16px;
font-weight: 600;
line-height: 16px;
letter-spacing: 0em;
color: #111110;
display: inline;
width: 55px;
`

export const Div = styled.div`
display: flex;
gap: 12px;
justify-content: center;
align-items: center;
`