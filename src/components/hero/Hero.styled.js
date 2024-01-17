import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width};
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  border-radius: 8px;
  overflow: hidden;
`;
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => props.size.w};
  height: ${props => props.size.h};
  padding-left: ${props => props.pl};
  gap: ${props => props.gap};
  background: ${props => props.bgc};
`;

export const Info = styled.div`
  width: 628px;
  font-family: KyivType Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: #f5f1ec;
`;
export const InfoText = styled.span`
  font-family: El Messiri;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #f5f1ec;
`;

export const Slider = styled.div`
  width: ${props => props.size.w};
  height: ${props => props.size.h};
  padding: 0;
  background-size: cover;
`;
