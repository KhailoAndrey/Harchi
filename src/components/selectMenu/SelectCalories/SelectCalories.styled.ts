import { palette } from "@/constants/colors";
import styled from "styled-components";

export const SelectItem = styled.select`
width: 177px;
height: 48px;
padding: 0 8px;
background-color: ${palette.beige};
border: transparent;
border-radius: 30px;
font-family: 'El Messiri';
font-size: 16px;
cursor: pointer;

-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`;
