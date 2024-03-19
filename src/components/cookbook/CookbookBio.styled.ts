import styled from 'styled-components';
import { palette } from '@/constants/colors';

export const BioWrapper = styled.div`
display:flex;
gap: 24px;
margin-bottom: 38px;
`

export const CookbookImg = styled.img`
width: 302px;
height: 220px;
border-radius: 8px;
`;

export const CookbookTitle = styled.h2`
margin-bottom: 24px;
font-family: "KyivType Sans";
font-size: 36px;
font-weight: 700;
line-height: 130%;
color: ${palette.red};
`;

export const RecipesAmount = styled.p`
margin-bottom: 12px;
font-family: "El Messiri";
font-size: 20px;
font-weight: 700;
line-height: 120%;
color: ${palette.mainBlack};
`;

export const OwnRecipes = styled.p`
margin-bottom: 12px;
font-family: "El Messiri";
font-size: 16px;
font-weight: 400;
line-height: 120%;
color: ${palette.mainBlack};
`;

export const SavedRecipes = styled.p`
font-family: "El Messiri";
font-size: 16px;
font-weight: 400;
line-height: 120%;
color: ${palette.mainBlack};
`;