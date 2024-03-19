import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const RecipesList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 24px;
`;

export const CategoryTitle = styled.p`
margin-bottom: 32px;
font-family: "KyivType Sans";
font-size: 36px;
font-weight: 700;
line-height: 130%;
color: ${palette.mainBlack};
`;

export const LoadMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;