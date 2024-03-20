import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const RecipeSection = styled.div`
  &:first-child {
    margin-top: 24px;
  }
  &:not(:first-child) {
    margin-top: 80px;
  }
`;

export const RecipesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const CategoryTitle = styled.p`
  margin-bottom: 32px;
  font-family: 'KyivType Sans';
  font-size: 36px;
  font-weight: 700;
  line-height: 130%;
  color: ${palette.mainBlack};
`;

export const RedirectButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LoadMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 32px;
`;

export const CookBookText = styled.p`
margin-top:80px auto 58px;
font-family: "El Messiri";
font-size: 24px;
font-weight: 700;
line-height: 130%;
color: ${palette.mainBlack};
`

export const SavedIngredientsWrapper = styled.div`
margin-top:80px;
`
