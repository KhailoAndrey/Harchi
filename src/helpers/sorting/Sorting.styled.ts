import { palette } from '@/constants/colors';
import styled from 'styled-components';

export const SortingBlock = styled.button`
display: flex; 
  align-items: center;
  position: relative;
  height: 48px;
  padding: 0;
  border-radius: 30px;
  background-color: ${palette.beige};

  &::before {
    content: url("data:image/svg+xml,<svg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.742525 0.492403C1.16094 0.0739842 1.83934 0.0739842 2.25775 0.492403L9.00014 7.23479L15.7425 0.492403C16.1609 0.0739842 16.8393 0.0739842 17.2578 0.492403C17.6762 0.910822 17.6762 1.58921 17.2578 2.00763L9.94716 9.31823C9.42414 9.84125 8.57615 9.84125 8.05312 9.31823L0.742525 2.00763C0.324106 1.58921 0.324106 0.910822 0.742525 0.492403Z' fill='%23111110' /></svg>");
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:hover {
    border: 1px solid transparent;
  }
`;

export const SortingList = styled.select`
flex: 1; 
  height: 48px;
  padding-left: 60px;
  padding-right: 30px;
  cursor: pointer;
  border-radius: 30px;
  background-color: transparent;
  font-family: 'El Messiri';
  font-size: 16px;
  font-weight: 500;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const Option = styled.option`
  font-family: 'El Messiri';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
`;
