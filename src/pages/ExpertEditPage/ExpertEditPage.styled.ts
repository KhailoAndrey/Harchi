import { palette } from "@/constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 146px auto 100px;
  width: 1440px;
  padding: 0 80px;
`
export const Inner = styled.div`
display:flex;
gap:8px;
margin-bottom:33px;
`

export const Title = styled.h1`
margin-bottom: 34px;
font-family: 'KyivType Sans';
font-size: 36px;
font-weight: 700;
line-height: 1.3;
color: ${palette.orange}
`

export const SavedIngredientsTitle = styled.p`
font-family: "El Messiri";
font-size: 24px;
font-weight: 700;
`