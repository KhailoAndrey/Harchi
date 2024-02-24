import { palette } from "@/constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
gap: 8px;
`;

export const Block = styled.div`
position: relative;
`;

export const Option = styled.option`
font-family: 'El Messiri';
font-size: 16px;
font-weight: 500;
line-height: 1.2;
`;

export const IconWrapper = styled.div`
position: absolute;
right: 8px;
top: 12px;
pointer-events: none;
`;

export const SearchInput = styled.input`
width: 250px;
height: 48px;
padding: 0 30px;
border: 1px solid ${palette.grey};
border-radius: 30px;
background: ${palette.beige};
font-family: 'El Messiri';
font-size: 16px;
font-height: 1.2;
`;
