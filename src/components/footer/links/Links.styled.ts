import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.span`
  color: ${palette.mainWhite};
  font-family: 'El Messiri';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
