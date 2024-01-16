import styled from 'styled-components';

export const SwiperScrollBar = styled.div`
  width: 204px;
  height: 10px;
  /* background-color: green; */
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  &.swiper-scrollbar-drag {
    background-color: #00ff00;
    width: 68px;
    height: 40px;
  }

  &.swiper-scrollbar-horizontal {
    width: 300px;
  }
  &.swiper-scrollbar {
    width: 200px;
  }
`;
