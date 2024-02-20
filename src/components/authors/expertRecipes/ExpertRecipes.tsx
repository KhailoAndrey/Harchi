import Sorting from '@/components/sorting/Sorting';
import {
  Wrapper,
  RecipesList,
  SelectingWrapper,
  Title,
  TitleWrapper,
  LoadMoreIcon,
} from './ExpertRecipes.styled';
import Select from '@/components/selectMenu/Select';
import CardRecipes from '@/helpers/cardOfRecipes/cardRecipes';
import recipes from '../../../helpers/recipes/recipes.json';
import { EXPERT_RESIPES_SORTING } from '@/constants/expertsRecipesSorting';
import LoadMore from '@/components/icons/LoadMoreIcon';

const ExpertRecipes = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Рецепти автора</Title>
        <Sorting list={EXPERT_RESIPES_SORTING} />
      </TitleWrapper>
      <SelectingWrapper>
        <Select />
      </SelectingWrapper>
      <RecipesList>
        <CardRecipes cards={recipes} />
      </RecipesList>
      <LoadMoreIcon>
        <LoadMore />
      </LoadMoreIcon>
    </Wrapper>
  );
};

export default ExpertRecipes;
