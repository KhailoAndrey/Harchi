import { Container, RecipesList, SubTitle, Title } from './LastRecipes.styled';

function LastRecipes() {
  return (
    <Container>
      <Title>Останні додані рецепти</Title>
      <SubTitle>
        Будьте першим серед тих, хто спробує наші нові рецепти
      </SubTitle>
      <RecipesList />
    </Container>
  );
}

export default LastRecipes;
