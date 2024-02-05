import { palette } from '@/constants/colors';
import styled, { keyframes } from 'styled-components';

const rotateDots = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ScrollBtn = styled.button`
  position: fixed;
  padding: 0;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  outline: 0;
  border-radius: 50%;
  color: ${palette.orange};
  background-color: transparent;

  &:hover {
    scale: 1.25;
    color: ${palette.green};
    border: none;
  }
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    padding: 0;
    top: 0px;
    left: -1px;
    border-radius: 50%;
    border: 2px dashed ${palette.orange};
    animation: ${rotateDots} 5s linear infinite;
  }
`;
