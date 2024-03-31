import styled from 'styled-components';
import { palette } from '@/constants/colors';
import { Link } from 'react-router-dom';

export const ExpertLink = styled(Link)`
  font-family: 'El Messiri';
`;

export const ExpertImg = styled.img`
  width: 358px;
  height: 220px;
  border-radius: 8px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    width: 312px;
  }
  @media screen and (min-width: 1440px) {
    width: 302px;
  }
`;

export const ProfessionTitle = styled.p`
  font-size: 14px;
  line-height: 1.2;
  color: ${palette.grey};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 9px;
  color: ${palette.mainBlack};
    @media screen and (min-width: 768px) {
    margin-top: 10px;
  margin-bottom: 14px;
  }
      @media screen and (min-width: 1440px) {
    margin-top: 8px;
  margin-bottom: 12px;
  }
`;

export const RatingBlock = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Rating = styled.p`
  font-size: 12px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const RecipesAmount = styled.p`
  font-size: 12px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ExpertName = styled.p`
  font-size: 22px;
  line-height: 1.3;
  font-weight: 500;
  color: ${palette.mainBlack};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
