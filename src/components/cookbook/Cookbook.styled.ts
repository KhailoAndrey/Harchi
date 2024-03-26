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
  flex-direction:column;
  gap: 24px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
  flex-wrap: wrap;
  }
`;

export const CategoryTitle = styled.p`
  margin-bottom: 30px;
  font-family: 'KyivType Sans';
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
  color: ${palette.mainBlack};
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const RedirectButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const LoadMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 32px;
`;

export const CookBookTextWrapper = styled.div`
  max-width: 882px;
  margin: 80px auto 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  font-family: 'El Messiri';
`;

export const CookBookText = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
  color: ${palette.mainBlack};
`;

interface ButtonStyledProps {
  $backgroundcolor: string;
}

export const AddBtn = styled.button<ButtonStyledProps>`
  ${props => props.$backgroundcolor};
  height: 48px;
  width: fit-content;
  padding: 16px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  color: ${palette.mainWhite};
`;

export const SavedIngredientsWrapper = styled.div`
  margin-top: 24px;
  @media screen and (min-width: 768px) {
  margin-top: 50px;
  }
  @media screen and (min-width: 1440px) {
      margin-top: 80px;
  }
  `;
