import styled from 'styled-components';
import { gradient, palette } from '@/constants/colors';
import { Link } from 'react-router-dom';

export const ExpertItem = styled.li``;

export const ExpertLink = styled(Link)`
font-family: 'El Messiri';
`;

export const ExpertImg = styled.img`
width: 302px;
height: 220px;
border-radius: 8px;
margin-bottom: 8px;
`;

export const ProfessionTitle = styled.p`
font-size: 16px;
line-height: 1.2;
color: ${palette.grey};
`

export const InfoBlock = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-top: 8px;
margin-bottom: 12px;
color: ${palette.mainBlack};
`

export const RatingBlock = styled.div`
display:flex;
gap: 4px;
align-items: center;
`

export const Rating = styled.p`
font-size: 16px;
line-height: 1.2;
`

export const RecipesAmount = styled.p`
font-size: 16px;
line-height: 1.2;
`

export const ExpertName = styled.p`
font-size: 24px;
line-height: 1.3;
font-weight: 500;
color: ${palette.mainBlack};
`