import { palette } from "@/constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
margin-top: 80px;
`

export const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 32px;
`

export const Title = styled.h3`
font-family: 'KyivType Sans';
font-size: 32px;
line-height: 1.3;
font-weight: 700;
`

export const Filtr = styled.div`
width: 196px;
border: 1px solid ${palette.mainBlack};
border-radius: 30px;
padding: 14.5px 30px;
`;

export const SelectingWrapper = styled.div`
display: flex;
gap: 8px;
margin-bottom: 24px;
padding-bottom: 8px;
border-bottom: 1px solid ${palette.grey};
`;

export const SortingItem = styled.li`
font-family: 'El Messiri';
font-size: 16px;
font-height: 1.2;
`;

export const RecipesList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 24px;
`;