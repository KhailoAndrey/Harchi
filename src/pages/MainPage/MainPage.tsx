import Hero from '../../components/home/hero/Hero';
import Welcome from '../../components/home/welcome/Welcome';
import CategoryRecipes from '../../components/home/category/CategoryRecipes';
import MoreRecipes from '../../components/home/moreRecipes/MoreRecipes';

import { Wrapper } from './MainPage.styled';

function MainPage() {
  return (
    <Wrapper>
      <Hero />
      <Welcome />
      <CategoryRecipes />
      <MoreRecipes />
    </Wrapper>
  );
}

export default MainPage;
