import Sorting from '@/helpers/sorting/Sorting';
import {Wrapper, 
  RecipesList,
  SelectingWrapper,
  Title,
  TitleWrapper
} from './ExpertRecipes.styled';
import Select from '@/helpers/select/Select';
import CardRecipes from '@/helpers/cardOfRecipes/cardRecipes';
import recipes from '../../../helpers/recipes/recipes.json';

const SortingList:string[] = ['За рейтингом', 'За складністю', 'За датою створення'];

const ExpertRecipes = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Рецепти автора</Title>
        <Sorting list={SortingList} />
      </TitleWrapper>
      <SelectingWrapper>
        <Select />
      </SelectingWrapper>
      <RecipesList>
        <CardRecipes cards={recipes} />
      </RecipesList>
    </Wrapper>
  );
};

export default ExpertRecipes;
