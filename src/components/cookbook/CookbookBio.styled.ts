import styled from 'styled-components';
import { palette } from '@/constants/colors';

export const BioWrapper = styled.div`
display:flex;
flex-direction: column;
gap: 24px;
margin-bottom: 38px;

@media screen and (min-width: 768px) {
flex-direction: row;
}
`

export const CookbookImg = styled.img`
width: 358px;
height: 199px;
border-radius: 8px;
@media screen and (min-width: 768px) {
width: 302px;
height: 220px;
}
`;

export const CookbookTitle = styled.h2`
margin-bottom: 24px;
font-family: "KyivType Sans";
font-size: 24px;
font-weight: 700;
line-height: 130%;
color: ${palette.red};

@media screen and (min-width: 768px) {
font-size: 36px;
}
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