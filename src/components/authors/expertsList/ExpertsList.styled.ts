import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  row-gap: 0px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
  row-gap: 32px;
  }
`;

export const LoadMoreIcon = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
