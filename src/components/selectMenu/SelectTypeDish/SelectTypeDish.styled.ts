import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const SelectItem = styled.select`
  // width: 92px;
  height: 36px;
  padding: 0 8px;
  background-color: ${palette.beige};
  border: transparent;
  border-radius: 30px;
  font-family: 'El Messiri';
  font-size: 12px;
  cursor: pointer;

  // -webkit-appearance: none;
  // -moz-appearance: none;
  // appearance: none;

  @media screen and (min-width: 1440px) {
    // width: 127px;
    height: 48px;
    font-size: 16px;
  }
`;
