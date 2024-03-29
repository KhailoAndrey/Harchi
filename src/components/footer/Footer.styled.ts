import { palette } from './../../constants/colors/index';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 100vw; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 236px;
  background-color: ${palette.darkGreen};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;  
  height: 100%;
  padding: 30px 80px;

  @media screen and (min-width: 768px) {
    /* height: 68px;
    padding: 0 32px; */
  }

  @media screen and (min-width: 1280px) {
    /* padding: 0 16px; */
  }
`;