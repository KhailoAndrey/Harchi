import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  color: ${palette.mainBlack};
  font-family: 'KyivType Sans';
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 12px;
`;

export const SubTitle = styled.span`
  color: ${palette.mainBlack};
  font-family: 'El Messiri';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 32px;
`;

export const RecipesList = styled.ul`
height: 450px;
border: 2px solid green;
`