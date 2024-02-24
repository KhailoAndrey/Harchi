import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const ShareContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${palette.beige};
  color: ${palette.green};
  z-index: 10;
`;

export const ShareTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ShareTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const SocialMediasList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShareIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
  border-radius: 50%;
  background-color: rgba(82, 120, 83, 0.2);
  &:hover {
    transform: scale(1.07);
    box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  }
`;

export const SocialMediaTitle = styled.p`
  font-size: 12px;
`;
