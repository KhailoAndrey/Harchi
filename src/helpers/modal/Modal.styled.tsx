import styled  from "styled-components";
import { palette } from '@/constants/colors';

export const Overlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(${palette.grey}, 0.7);
  z-index: 100;
  overflow: auto;
`;

export const Wrapper = styled.div`
  position: relative;
  opacity: 0px;
  border-radius: 12px;
  background-color: white;
`;


export const CloseBtn = styled.button`
position: absolute;
top: 12px;
right: 12px;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
padding: 0;
border: none;
z-index: 1;
&:hover{
  scale: 1.25;
}
`;

