import { useEffect, useState } from 'react';
import recipes from '../../../helpers/recipes/recipes.json';
import Sorting from '@/components/sorting/Sorting';
import Select from '@/components/selectMenu/Select';
import CardRecipes from '@/helpers/cardOfRecipes/cardRecipes';
import { EXPERT_RESIPES_SORTING } from '@/constants/expertsRecipesSorting';
import LoadMore from '@/components/icons/LoadMoreIcon';
import { PiSlidersHorizontalLight } from 'react-icons/pi';
import {
  Wrapper,
  RecipesList,
  SelectingWrapper,
  Title,
  TitleWrapper,
  LoadMoreIcon,
  Filters,
  FiltersBlock,
  FilterText,
  FilterModal,
} from './ExpertRecipes.styled';

const ExpertRecipes = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setIsFiltersOpen(prevIsFiltersOpen => !prevIsFiltersOpen);
  };

  const handleChangedSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleChangedSize);
    return () => {
      window.removeEventListener('resize', handleChangedSize);
    };
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Рецепти автора</Title>
        {windowWidth >= 768 && <Sorting list={EXPERT_RESIPES_SORTING} />}
      </TitleWrapper>
      {windowWidth < 768 && (
        <FiltersBlock>
          <Filters onClick={toggleFilters}>
            <FilterText>Фільтри</FilterText>
            <PiSlidersHorizontalLight size={18} strokeWidth={6} />
          </Filters>
          <Sorting list={EXPERT_RESIPES_SORTING} />
        </FiltersBlock>
      )}
      {isFiltersOpen && (
        <FilterModal>
          <Select />
        </FilterModal>
      )}
      {windowWidth >= 768 && (
        <SelectingWrapper>
          <Select />
        </SelectingWrapper>
      )}
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
