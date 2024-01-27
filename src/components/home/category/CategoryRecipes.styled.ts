import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 100px;
  /* overflow: hidden; */
`;

export const Title = styled.h2`
  color: #111110;
  font-family: 'KyivType Sans';
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const Slider = styled.div`
  width: 1280px;
  height: 464px;
  padding: 0;
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 302px;
  height: 76px;
  padding: 35px 0 12px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  background: linear-gradient(
    354deg,
    #242323 15.32%,
    rgba(68, 65, 65, 0.78) 56%,
    rgba(99, 95, 95, 0.55) 70%,
    rgba(142, 136, 136, 0.25) 89%,
    rgba(176, 169, 169, 0) 100%
  );
  transition: height 0.5s ease-out, padding 0.5s ease-out;
`;

export const Text = styled.p`
  color: #fbf8f6;
  font-family: 'El Messiri';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  transition: font-size 0.5s ease-out, font-weight 0.5s ease-out,
    line-height 0.5s ease-out;
`;

export const SlideContainer = styled.div`
  position: relative;
  &:hover,
  &:focus {
    ${Overlay} {
      height: 150px;
      padding: 86px 0 32px;
    }

    ${Text} {
      font-size: 32px;
      font-weight: 500;
      line-height: 100%;
    }
  }
`;
