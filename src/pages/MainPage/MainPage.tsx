import Welcome from '../../components/home/welcome/Welcome';
import Hero from '../../components/home/hero/Hero';
import MoreRecipes from '../../components/home/moreRecipes/MoreRecipes';
import { Wrapper } from './MainPage.styled';

function MainPage() {
  return (
    <Wrapper>
      <Hero />
      <Welcome />
      <MoreRecipes />
    </Wrapper>
  );
}

export default MainPage;
