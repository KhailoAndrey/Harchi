import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  height: 98px;
  width: 100vw;
  padding: 16px 80px;
  background-color: #F5F1EC;
  position: fixed;
  top: 0;
  z-index: 50;


  @media screen and (min-width: 768px) {
    /* height: 68px;
    padding: 0 32px; */
  }

  @media screen and (min-width: 1280px) {
    /* padding: 0 16px; */
  }
`;