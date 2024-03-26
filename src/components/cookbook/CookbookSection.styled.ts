import styled from 'styled-components';
import { palette, gradient } from '@/constants/colors';
import { NavLink } from 'react-router-dom';

export const SelectBlock = styled.div`
position: relative;
`;

export const IconWrapper = styled.div`
position: absolute;
top: 8px;
right: 40px;
pointer-events: none;
`;

export const Select = styled.select`
min-width: 358px;
height: 36px;
border-radius: 8px 8px 0px 0px;
border:none;
background: ${gradient.star};
text-align: center;
font-family: "El Messiri";
font-size: 16px;
font-weight: 500;
line-height: 120%;
color: ${palette.mainWhite};
outline:none;

-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`;

export const Option = styled.option`
font-family: 'El Messiri';
font-size: 16px;
font-weight: 500;
line-height: 120%;
color: ${palette.mainBlack};
background-color: ${palette.beige};
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionList = styled.ul`
  display: flex;
    gap: 60px;
    @media screen and (min-width: 1440px) {
  gap: 24px;
  }
`;

export const SectionLink = styled(NavLink)`
  padding: 8px;
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid ${palette.lightGrey};
  font-family: 'El Messiri';
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  color: ${palette.mainBlack};

  &.active {
    color: ${palette.mainWhite};
    background:  ${gradient.star};
  }

   &:not(.active):hover,
   &:not(.active):focus {
    border-bottom: 1px solid ${palette.orange};
    color: ${palette.orange};
  }
`;
