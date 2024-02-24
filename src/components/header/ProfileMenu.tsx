import { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from '../searchbar/Searchbar';
import { useDebounce } from '@/hooks/useDebouce';
import { SiCodechef } from 'react-icons/si';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '@/constants/colors';

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
      <ProfileLink to={'/experts/edit'}>
        <SiCodechef size={48}/>
      </ProfileLink>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ProfileLink = styled(Link)`
color:${palette.mainBlack};
&:hover{
  color:${palette.red};
}
`;

export default ProfileMenu;
