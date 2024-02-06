import { palette } from "@/constants/colors";
import styled from "styled-components";

export const SortingBlock = styled.div`
position: relative;
`;

export const IconWrapper = styled.div`
position: absolute;
top: 9px;
left: 30px;
pointer-events: none;
`;

export const SortingList = styled.select`
min-width: 196px;
height: 48px;
padding-right: 30px;
padding-left: 68px;
border: 1px solid ${palette.grey};
background-color: ${palette.beige};
border-radius: 30px;
font-family: 'El Messiri';
font-size: 16px;
font-weight: 500;
cursor: pointer;

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