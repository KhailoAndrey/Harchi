import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 236px;
  width: 100vw;
  padding: 30px 80px;
  background-color: #1E261E;
  position: fixed;
  bottom: 0;
  z-index: 50;


  @media screen and (min-width: 768px) {
    /* height: 68px;
    padding: 0 32px; */
  }

  @media screen and (min-width: 1280px) {
    /* padding: 0 16px; */
  }
`;