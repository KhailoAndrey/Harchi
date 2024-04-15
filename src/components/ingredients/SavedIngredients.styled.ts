import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 16px;
  background-color: ${palette.green};
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const RecipeItem = styled.li`
  font-family: 'El Messiri';
  color: ${palette.mainWhite};
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const HeaderBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 26px;
  }
`;

export const RecipeTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
    @media screen and (min-width: 768px) {
  margin-bottom: 0px;
  }
`;

export const RecipeTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 500;
  }
`;

export const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`;

export const Icon = styled.div`
  width: 18px;
  heigth: 18px;
  color: ${palette.orange};
  transition-property: color;
  transition-duration: 250ms;
  cursor: pointer;
  &:hover {
    color: ${palette.mainWhite};
  }
  @media screen and (min-width: 768px) {
    width: 24px;
    heigth: 24px;
  }
`;

export const CopyIcon = styled.div`
  position: relative;
`;

export const CopyMessage = styled.div`
  position: absolute;
  top: 26px;
  right: 50%;
  transform: translateX(50%);
  white-space: nowrap;
  padding: 6px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${palette.mainBlack};
  color: ${palette.mainWhite};
  opacity: 0.5;
`;

export const IngridientsList = styled.ul`
  display: flex;
  flex-direction: column;
  column-gap: 24px;
  row-gap: 14px;
  @media screen and (min-width: 1440px) {
    width: 954px;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const IngridientItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${palette.mainWhite};
  font-family: 'El Messiri';
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 48px) / 3);
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CrossIcon = styled.div`
  width: 16px;
  heigth: 16px;
    @media screen and (min-width: 768px) {
    width: 20px;
  heigth: 20px;
  }
`
