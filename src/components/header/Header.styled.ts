import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 98px;
  background-color: #f5f1ec;
  position: fixed;
  top: 0;
  z-index: 50;
`;

export const Container = styled.div`
  gap: 48px;
  width: 1440px;
  height: 100%;
  padding: 16px 80px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    /* height: 68px;
    padding: 0 32px; */
  }

  @media screen and (min-width: 1280px) {
    /* padding: 0 16px; */
  }
`;
