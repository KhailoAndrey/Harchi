import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    margin-bottom: 29px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const Title = styled.h3`
  font-family: 'KyivType Sans';
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const FiltersBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Filters = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

export const FilterText = styled.p`
  font-family: 'El Messiri';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.12px;
`;

export const FilterModal = styled.div`
  position: absolute;
  z-index: 20;
`;

export const SelectingWrapper = styled.div`
  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${palette.grey};
`;

export const RecipesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

export const LoadMoreIcon = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
