import { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from '../searchbar/Searchbar';
import { useDebounce } from '@/hooks/useDebouce';
import styled from 'styled-components';

function ProfileMenu() {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    //fetch search
  }, [debouncedValue]);
  return (
    <Wrapper>
      <SearchBar
        value={value}
        onChange={handleChange}
        placeholder="Пошук"
        fullWidth
      />
      <div>Profile Icon</div>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export default ProfileMenu;
