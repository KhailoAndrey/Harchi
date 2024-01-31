import { palette } from "@/constants/colors";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(${palette.mainWhite}, 0.7);
  z-index: 10;
`;

export const ModalWindow = styled.div`
  /* position: relative; */
  top: 50%;
  left: 50%;
  width: 895px;
  height: 535px;
  padding: 33px 81px;
  background-color: ${palette.mainWhite};
  box-shadow: 3px 8px 14px 0px ${palette.lightGrey};
  border-radius: 14px;

  /* @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    top: 148px;
    padding: 60px 129px;
    width: 608px;
    height: 354px;
  }
  @media screen and (min-width: 1280px) {
    top: 112px;
  } */
`;
