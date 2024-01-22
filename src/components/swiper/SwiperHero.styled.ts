import styled from 'styled-components';

export const SwiperScrollBar = styled.div<{ ml: number }>`
  width: 204px !important;
  position: absolute;
  margin-left: ${props => props.ml / 2 - 102}px !important;
  margin-bottom: 12px !important;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  /* background-color: #ff0000 !important; */

  &:hover {
    opacity: 1;
  }

  &.swiper-scrollbar-drag {
    background-color: #00ff00 !important;
    /* width: 68px; */
    height: 4px !important;
  }

  /* &.swiper-scrollbar-horizontal {
    width: 300px;
  } */
  /* &.swiper-scrollbar {
    width: 200px;
  } */
`;
