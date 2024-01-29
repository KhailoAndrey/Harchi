import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.span`
  color: #fff;
  font-family: 'El Messiri';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  display: flex;
  width: 250px;
  height: 48px;
  padding: 16px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid #fbf8f6;
  background-color: transparent;
  margin-bottom: 20px;
  color: #fbf8f6;
  font-family: 'El Messiri';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &::placeholder {
    opacity: 0.7;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  width: 250px;
  height: 48px;
  padding: 16px 30px;
  padding: 0;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: #fbf8f6;
  transition: transform 1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const TextBtn = styled.span`
  display: inline-block;
  color: #111110;
  font-family: 'El Messiri';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-top: 4px;
`;
