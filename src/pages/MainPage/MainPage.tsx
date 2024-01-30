import Hero from '../../components/home/hero/Hero';
import Welcome from '../../components/home/welcome/Welcome';
import Cuisine from '@/components/home/cuisine/Cuisine';
import CategoryRecipes from '../../components/home/category/CategoryRecipes';
import MoreRecipes from '../../components/home/moreRecipes/MoreRecipes';
import Experts from '@/components/home/experts/Experts';
import LastRecipes from '@/components/home/lastRecipes/LastRecipes';

import { Wrapper } from './MainPage.styled';

function MainPage() {
  return (
    <Wrapper>
      <Hero />
      <Welcome />
      <Cuisine />
      <CategoryRecipes />
      <MoreRecipes />
      <Experts />
      <LastRecipes />
    </Wrapper>
  );
}

export default MainPage;
