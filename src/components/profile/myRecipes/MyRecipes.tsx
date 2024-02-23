import CardRecipes from '@/helpers/cardOfRecipes/cardRecipes';
import recipes from '../../../helpers/recipes/recipes.json';
import { TitleWrapper, Title, RecipesList } from './MyRecipes.styled';
import { TbPencilMinus } from 'react-icons/tb';
import { palette } from '@/constants/colors';

const MyRecipes = () => {
  return (
    <div>
      <TitleWrapper>
        <TbPencilMinus size={32} color={palette.orange} />
        <Title>Moї рецепти</Title>
      </TitleWrapper>
      <RecipesList>
        <CardRecipes cards={recipes} areControlBtnsShowed={true} />
      </RecipesList>
    </div>
  );
};

export default MyRecipes;
