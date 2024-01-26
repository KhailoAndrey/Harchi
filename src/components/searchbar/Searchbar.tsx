import { palette } from '@/constants/colors';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface ISearchBar {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  fullWidth?: boolean;
}
function SearchBar({
  value,
  onChange,
  placeholder,
  fullWidth = false,
}: ISearchBar) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      $fullWidth={fullWidth}
    />
  );
}

const Input = styled.input<{ $fullWidth: boolean }>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  height: 3rem;
  background: transparent;
  border: 1px solid ${palette.mainBlack};
  border-radius: 30px;
  padding: 12px 8px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${palette.grey};
  font-family: El Messiri;
  font-size: 1rem;
`;
export default SearchBar;
