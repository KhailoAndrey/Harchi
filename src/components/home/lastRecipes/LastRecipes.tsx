import CardRecipes from '@/helpers/cardOfRecipes/cardRecipes';
import { Container, RecipesList, SubTitle, Title } from './LastRecipes.styled';
import cards from '../../../helpers/cuisineSlides/cuisine.json';


function LastRecipes() {
  return (
    <Container>
      <Title>Останні додані рецепти</Title>
      <SubTitle>
        Будьте першим серед тих, хто спробує наші нові рецепти
      </SubTitle>
      <RecipesList>
        <CardRecipes cards={cards} />
      </RecipesList>
    </Container>
  );
}

export default LastRecipes;
