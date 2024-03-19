import styled from 'styled-components';
import { palette, gradient } from '@/constants/colors';
import { NavLink } from 'react-router-dom';

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionList = styled.ul`
  display: flex;
  gap: 24px;
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
