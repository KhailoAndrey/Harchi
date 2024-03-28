import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const SortingBlock = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: 20px;
  pointer-events: none;
  @media screen and (min-width: 1440px) {
    min-width: 196px;
    left: 30px;
  }
`;

export const SortingList = styled.select`
  width: 143px;
  height: 44px;
  padding-right: 20px;
  padding-left: 48px;
  border: 1px solid ${palette.grey};
  background-color: ${palette.beige};
  border-radius: 30px;
  font-family: 'El Messiri';
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  @media screen and (min-width: 1440px) {
    min-width: 196px;
    height: 48px;
    padding-right: 30px;
    padding-left: 68px;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Option = styled.option`
  font-family: 'El Messiri';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
`;
