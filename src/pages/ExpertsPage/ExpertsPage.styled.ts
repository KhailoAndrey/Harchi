import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 106px auto 40px;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    margin: 131px auto 65px;
    padding: 0 60px;
  }
  @media screen and (min-width: 1440px) {
    margin: 146px auto 100px;
    width: 1440px;
    padding: 0 80px;
  }
`;

export const Text = styled.p`
  font-family: 'El Messiri';
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  font-family: 'KyivType Sans';
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 32px;
  max-width: 717px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const SelectBlock = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-end;
`;
