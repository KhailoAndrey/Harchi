import Hero from '../../components/home/hero/Hero';
import Welcome from '../../components/home/welcome/Welcome';
import CategoryRecipes from '../../components/home/category/CategoryRecipes';
import MoreRecipes from '../../components/home/moreRecipes/MoreRecipes';
import Experts from '@/components/home/experts/Experts';

import { Wrapper } from './MainPage.styled';

function MainPage() {
  return (
    <Wrapper>
      <Hero />
      <Welcome />
      <CategoryRecipes />
      <MoreRecipes />
      <Experts />
    </Wrapper>
  );
}

export default MainPage;
