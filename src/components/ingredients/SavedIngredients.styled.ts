import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${palette.green};
  border-radius: 8px;
`;

export const RecipeItem = styled.li`
  font-family: 'El Messiri';
  color: ${palette.mainWhite};
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const RecipeTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RecipeTitle = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
`;

export const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Icon = styled.div`
  width: 24px;
  heigth: 24px;
  color: ${palette.orange};
  transition-property: color;
  transition-duration: 250ms;
  cursor: pointer;
  &:hover {
    color: ${palette.mainWhite};
  }
`;

export const CopyIcon = styled.div`
  position:relative;
`;

export const CopyMessage = styled.div`
  position: absolute;
  top: 26px;
  right: 50%;
  transform: translateX(50%);
  white-space:nowrap;
  padding: 6px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${palette.mainBlack};
  color: ${palette.mainWhite};
  opacity: 0.5;
`;

export const IngridientsList = styled.ul`
  width: 954px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 14px;
`;

export const IngridientItem = styled.li`
  flex-basis: calc((100% - 48px) / 3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${palette.mainWhite};
  font-family: 'El Messiri';
  font-size: 16px;
  line-height: 1;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
