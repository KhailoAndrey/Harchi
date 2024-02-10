import styled from 'styled-components';
import { palette } from '@/constants/colors';

export const Wrapper = styled.div`
  margin: 98px auto 0;
  width: 1440px;
`;

export const SH1Title = styled.h1`
font-family: 'El Messiri';
font-size: 36px;
font-weight: 700;
line-height: 130%;
text-align: left;
color: ${palette.mainBlack};
margin-bottom: 24px;
`;

export const SDivLine = styled.div`
  border-bottom: 1px solid ${palette.grey};
`;