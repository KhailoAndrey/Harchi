import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Item = styled.div<{ $color }>`
  cursor: pointer;
  color: ${({ $color }) => $color || palette.mainBlack};
  font-weight: 400;
`;
