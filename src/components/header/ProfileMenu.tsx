import { ChangeEvent, useEffect, useState } from 'react';
import SearchBar from '../searchbar/Searchbar';
import { useDebounce } from '@/hooks/useDebouce';
import { SiCodechef } from 'react-icons/si';
import styled from 'styled-components';
import Modal from '../../helpers/modal/Modal';
import Register from '../../components/register/Register';
import { Link } from 'react-router-dom';
import { palette } from '@/constants/colors';

function ProfileMenu() {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);



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
      <button type='button' onClick={openModal}>
        <SiCodechef  size={48}/>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Register/>
      </Modal>
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
