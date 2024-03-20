import CookbookBio from '@/components/cookbook/CookbookBio';
import { Wrapper } from './MyCookbook.styled';
import { Outlet } from 'react-router-dom';
import CookbookSection from '@/components/cookbook/CookbookSection';

const MyCookbook = () => {
  return (
    <Wrapper>
      <CookbookBio />
      <CookbookSection>
        <Outlet />
      </CookbookSection>
    </Wrapper>
  );
};

export default MyCookbook;
