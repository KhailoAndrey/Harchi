import CookbookBio from '@/components/cookbook/CookbookBio';
import { Wrapper } from './MyCookbook.styled';
import { Outlet, useParams } from 'react-router-dom';
import CookbookSection from '@/components/cookbook/CookbookSection';

const MyCookbook = () => {
  const {section} = useParams();

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
