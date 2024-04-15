import CardRecipes from '@/helpers/cardOfRecipes/cardRecipes';
import recipes from '../../../helpers/recipes/recipes.json';
import {
  TitleWrapper,
  Title,
  RecipesList,
  LoadMoreBtn,
} from './MyRecipes.styled';
import { TbPencilMinus } from 'react-icons/tb';
import { palette } from '@/constants/colors';
import LoadMore from '@/components/icons/LoadMoreIcon';
import { useState } from 'react';

const MyRecipes = () => {
  const [visibleRecipesAmount, setVisibleRecipesAmount] = useState(4);
  const visibleRecipes = recipes.slice(0, visibleRecipesAmount);
  const loadMoreRecipes = () => {
    setVisibleRecipesAmount(prevCount => prevCount + 4);
  };

  return (
    <div>
      <TitleWrapper>
        <TbPencilMinus size={32} color={palette.orange} />
        <Title>Moї рецепти</Title>
      </TitleWrapper>
      <RecipesList>
        <CardRecipes cards={visibleRecipes} areControlBtnsShowed={true} />
      </RecipesList>
      {recipes.length >= 4 && visibleRecipes.length !== recipes.length && (
        <LoadMoreBtn onClick={loadMoreRecipes}>
          <LoadMore />
        </LoadMoreBtn>
      )}
    </div>
  );
};

export default MyRecipes;
