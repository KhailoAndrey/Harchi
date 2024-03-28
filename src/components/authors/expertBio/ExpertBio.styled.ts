import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
  }
`;

export const ExpertImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  @media screen and (min-width: 768px) {
    width: 164px;
    height: 164px;
  }
  @media screen and (min-width: 1440px) {
    width: 193px;
    height: 193px;
  }
`;

export const Bio = styled.div`
  font-family: 'El Messiri';
`;

export const Name = styled.h2`
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 5px;
  margin-bottom: 19px;
  @media screen and (min-width: 768px) {
    margin-top: 7px;
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    margin-bottom: 26px;
  }
`;

export const RecipesAmount = styled.p`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const RatingBlock = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Rating = styled.p`
  font-size: 14px;
  line-height: 1.2;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  max-width: 622px;
  font-size: 14px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
