import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TextSoc = styled.span`
  color: #fff;
  font-family: 'El Messiri';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const SocIcons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: start;
`;

export const SocItem = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
