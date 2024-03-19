import {
    BioWrapper,
  CookbookImg,
  CookbookTitle,
  OwnRecipes,
  RecipesAmount,
  SavedRecipes,
} from './CookbookBio.styled';
import bookPhoto from '/public/cuisinePhoto/cuisine3.png';

const CookbookBio = () => {
  return (
    <BioWrapper>
      <CookbookImg src={bookPhoto} alt="recipe" />
      <div>
        <CookbookTitle>Моя кулінарна книга</CookbookTitle>
        <RecipesAmount>Кількість рецептів в колекції: 50</RecipesAmount>
        <OwnRecipes>Мої рецепти: 30</OwnRecipes>
        <SavedRecipes>Збережені рецепти: 20</SavedRecipes>
      </div>
    </BioWrapper>
  );
};

export default CookbookBio;
