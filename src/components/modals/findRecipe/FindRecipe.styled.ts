// import { React } from 'react';
import { palette } from '@/constants/colors';
import styled from 'styled-components';
// import { Field, Form, Formik } from 'formik';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(${palette.grey}, 0.7);
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  position: relative;
  /* top: 50%;
left: 50%; */
  width: 895px;
  height: 535px;
  padding: 33px 81px;
  background-color: ${palette.mainWhite};
  box-shadow: 3px 8px 14px 0px ${palette.lightGrey};
  border-radius: 14px;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 22px;
  right: 22px;
  width: 24px;
  height: 24px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  &:hover{
    scale: 1.25;
  }
`;

export const ModalWindow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

export const ModalTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  font-family: 'KyivType Sans';
  color: ${palette.mainBlack};
  line-height: 130%;
  margin-bottom: 32px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalForm = styled.div`
  width: 733px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
  /* flex-direction: column; */
  /* margin-bottom: 48px;   */
`;

export const BlockForm = styled.div`
  width: 336px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const SubBlock = styled.div`
  display: flex;
  gap: 8px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* width: 336px; */
`;

export const Label = styled.label`
  color: ${palette.mainBlack};
  font-family: 'El Messiri';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* margin-bottom: 16px; */
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 16px;
  justify-content: flex-end;
  align-items: center;
  /* gap: 16px; */
  border-radius: 4px;
  /* margin-bottom: 24px; */
  border: 1px solid ${palette.grey};
  background: ${palette.mainWhite};
`;

export const Select = styled.select`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 16px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  /* margin-bottom: 24px; */
  border: 1px solid ${palette.grey};
  background: ${palette.mainWhite};
`;
