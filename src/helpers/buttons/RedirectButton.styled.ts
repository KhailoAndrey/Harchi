import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%, 100% {
    width: 194px;
  }
  50% {
    width: 209px;
  }
`;

export const ButtonStyled = styled.button<{
  backgroundcolor: string;
  textcolor: string;
}>`
  background: ${props => props.backgroundcolor};
  color: ${props => props.textcolor};
  display: flex;
  height: 48px;
  padding: 16px 30px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  font-family: El Messiri;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  /* max-width: fit-content; */
  /* width: 194px; */
  animation: ${fadeIn} 2s infinite ease-out;
`;
