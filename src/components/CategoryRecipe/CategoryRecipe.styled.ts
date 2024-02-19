import styled from 'styled-components';
import { palette } from '@/constants/colors';

export const SPTitle = styled.p`
    font-family: 'El Messiri';
    font-size: 32px;
    font-weight: 500;
    line-height: 100%;
    text-align: left;
    color: ${palette.mainBlack};
    margin-bottom: 12px;
`;

export const SPDescription = styled.p`
    font-family: "El Messiri";
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
    color: ${palette.grey};
`;

export const SDivWrapper = styled.div`
    display: flex;
    gap: 24px;

`;

export const SDivWrapperDescription = styled.div`
    width:50%;
`;

export const SDivInfo=styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

`;

export const SImgMainPhoto = styled.img`
    width:628px;
    height:431px;
    border-radius: 8px;
    background: lightgray -87.798px 0px / 137.261% 100% no-repeat;
    background-size: cover;
    margin-bottom: 12px;
`;

export const SDivWrapperInformation = styled.div`
    display: flex;
    gap: 54px;
`;

export const SDivWrapperInfo = styled.div`
    display: flex;
    gap: 4px;
`;

export const SP = styled.p`
    font-family: "El Messiri";
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    color: ${palette.mainBlack};
`;

export const SImgCircle= styled.img`
    width: 40px;
    height:40px;
    border-radius: 50%;
`;

export const SDivWrapperOwner=styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;