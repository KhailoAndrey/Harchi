import { palette } from "@/constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
gap: 24px;
align-items: center;
margin-bottom: 80px;
`
export const ImgWrapper = styled.div`
position:relative;
`

export const IconWrapper = styled.div`
position:absolute;
bottom:0;
right:25px;
width:36px;
height:36px;
border-radius:50%;
background-color:${palette.orange};
display:flex;
align-items: center;
justify-content: center;
cursor:pointer;
`

export const ExpertImg = styled.img`
width:193px;
height:193px;
border-radius: 50%;
object-fit: cover;
object-position: center;
`
export const Bio = styled.div`
display:flex;
flex-direction: column;
gap: 25px;
font-family: 'El Messiri';
`
export const InfoWrapper = styled.div`
width:264px;
display:flex;
flex-direction: column;
gap: 25px;
`

export const Block = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`

export const Name = styled.h2`
font-size: 24px;
font-weight: 500;
line-height: 1.3;
`

export const Email = styled.p`
font-size: 20px;
font-weight: 400;
line-height: 1.3;
`

export const RatingBlock = styled.div`
display:flex;
gap: 4px;
align-items: center;
color: ${palette.orange};
`

export const Rating = styled.p`
font-size: 16px;
line-height: 1.2;
`
export const DescriptionBlock = styled.div`
display:flex;
align-items: center;
`

export const Description = styled.p`
max-width: 484px;
font-size: 20px;
line-height: 1.3;
`

export const ProfileInformation = styled.div`
display:flex;
justify-content: space-between;
margin-bottom:80px;
`

export const ListTitle = styled.p`
margin-bottom: 24px;
font-family: "El Messiri";
font-size: 24px;
font-weight: 700;
line-height: 1.3;
`

export const SettingsItem = styled.li`
width:229px;
display:flex;
align-items:center;
gap:12px;
cursor:pointer;
font-family: "El Messiri";
font-size: 16px;
line-height: 1.2;

&:not(:last-child){
margin-bottom: 17px;
}
`

export const StatisticsItem = styled.li`
width:262px;
display:flex;
align-items:center;
justify-content: space-between;
gap:25px;
font-family: "El Messiri";
font-size: 16px;
line-height: 1.2;

&:not(:last-child){
margin-bottom: 17px;
}
`

export const ListItem = styled.li`
width:290px;
display:flex;
align-items:center;
justify-content: space-between;

cursor:pointer;
font-family: "El Messiri";
font-size: 16px;
line-height: 1.2;

&:not(:last-child){
margin-bottom: 17px;
}
`