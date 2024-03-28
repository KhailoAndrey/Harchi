import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 10px;
  background-color: ${palette.green};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    background-color: transparent;
    padding: 0px;
  }
`;

export const Block = styled.div`
  position: relative;
`;

export const Option = styled.option`
  font-family: 'El Messiri';
  font-size: 12px;
  line-height: 1.2;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 4px;
  top: 8px;
  // top: 50%;
  // transform: translateY(-50%);
  pointer-events: none;
  @media screen and (min-width: 1440px) {
    right: 8px;
    top: 12px;
  }
`;

export const SearchInput = styled.input`
  width: 112px;
  height: 44px;
  padding: 0 7px;
  border: 1px solid ${palette.grey};
  border-radius: 30px;
  background: ${palette.beige};
  font-family: 'El Messiri';
  font-size: 12px;
  font-height: 1.2;
  @media screen and (min-width: 1440px) {
    width: 250px;
    height: 48px;
    padding: 0 30px;
    font-size: 16px;
  }
`;
