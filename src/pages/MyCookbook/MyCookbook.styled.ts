import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px auto;
  max-width: 390px;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    margin: 65px auto;
    max-width: 768px;
    padding: 0 60px;
  }
  @media screen and (min-width: 1440px) {
    margin: 146px auto 100px;
    max-width: 1440px;
    padding: 0 80px;
  }
`;
