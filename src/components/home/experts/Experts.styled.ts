import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
  .redirbtn {
    display: flex;
    align-self: flex-end;
    > button {
      transform-origin: center right;
      transition: transform 0.5s ease-out;
      &:hover {
        transform-origin: center right;
      }
    }
  }
`;

export const Title = styled.h2`
  color: #111110;
  font-family: 'KyivType Sans';
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 32px;
`;

export const ExpertList = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 48px;
`;

export const ExpertItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ExpertPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ExpertPhoto = styled.img`
  width: 100%;
`;

export const ExpertProf = styled.span`
  color: #6f6b6b;
  font-family: 'El Messiri';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const ExpertName = styled.span`
  color: #111110;
  font-family: 'El Messiri';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;
