import styled from 'styled-components';

export const ProfileInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const ListTitle = styled.p`
  margin-bottom: 24px;
  font-family: 'El Messiri';
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
`;

export const SettingsItem = styled.li`
  width: 229px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-family: 'El Messiri';
  font-size: 16px;
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: 17px;
  }
`;

export const StatisticsItem = styled.li`
  width: 262px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  font-family: 'El Messiri';
  font-size: 16px;
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: 17px;
  }
`;

export const ListItem = styled.li`
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  font-family: 'El Messiri';
  font-size: 16px;
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: 17px;
  }
`;
