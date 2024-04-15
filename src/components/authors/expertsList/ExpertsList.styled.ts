import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  row-gap: 24px;
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
