import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Item = styled.div<{ $color: string }>`
  cursor: pointer;
  color: ${({ $color }) => $color || palette.mainBlack};
  font-weight: 400;
  transform: scale(1);
  transition: transform 1s ease-out;
  &:hover{
    transform: scale(1.25);
  }
`;
