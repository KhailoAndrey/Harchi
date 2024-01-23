import styled from 'styled-components';

import logo from '../../assets/logo/logo.png';

import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 58px;
  height: 66px;
  background-repeat: no-repeat;
  /* background-size: 20px 20px; */
  background-image: url(${logo});

  &:hover {
    box-shadow: rgba(116, 177, 232, 0.24);
    scale: 1.1;
  }
`;
