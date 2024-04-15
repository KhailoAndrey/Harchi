import styled from 'styled-components';
import bg_d_1x from '/src/assets/images/404/404_desk_1x.png';
import zero from '/src/assets/images/404/zero.png';
import { palette } from '@/constants/colors';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 98px auto 0;
  width: 1440px;
`;

export const Container = styled.div`
  width: 1295px;
  height: 730px;
  margin: 84px;
  background: url(${bg_d_1x});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 32px;
  /* justify-content: space-between; */
  align-items: center;
`;

export const Zero = styled.div`
  background-image: url(${zero});
  width: 358px;
  height: 420px;
  margin-top: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled.img`
  width: 236px;
  z-index: -1;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  width: 560px;
`;
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;
export const InfoTitle = styled.span`
  color: ${palette.mainBlack};
  text-align: center;
  font-family: 'Kyiv*Type Titling';
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const InfoDescription = styled.span`
  color: ${palette.mainBlack};
  text-align: center;
  font-family: 'El Messiri';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 420px;
`;

export const BackBtn = styled(Link)`
  display: flex;
  height: 48px;
  padding: 16px 30px;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: ${palette.green};
  transition: transform 1s ease;
  &:hover {
    transform: scale(1.25);
  }
`;

export const TextBtn = styled.span`
  color: ${palette.fill};
  font-family: 'El Messiri';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
