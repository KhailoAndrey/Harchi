import styled from "styled-components";

interface ButtonStyledProps {
  $backgroundcolor: string;
  $textcolor: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${props => props.$backgroundcolor};
  color: ${props => props.$textcolor};
  display: flex;
  height: 48px;
  padding: 16px 30px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 30px;
  font-family: 'El Messiri';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  width: fit-content;
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.15);
  }
`;
