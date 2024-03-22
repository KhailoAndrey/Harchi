// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SavedIngredients from '../ingredients/SavedIngredients';
import CardRecipes from '@/helpers/cardOfRecipes/cardRecipes';
import recipes from '../../../src/helpers/recipes/recipes.json';
import {
  AddBtn,
  CategoryTitle,
  CookBookText,
  CookBookTextWrapper,
  LoadMoreBtn,
  RecipeSection,
  RecipesList,
  RedirectButtonWrapper,
  SavedIngredientsWrapper,
} from './Cookbook.styled';
import RedirectButton from '@/helpers/buttons/RedirectButton';
import { gradient, palette } from '@/constants/colors';
import { useEffect, useState } from 'react';
import LoadMore from '../icons/LoadMoreIcon';
import { ICard } from '@/types';
import { IoIosAddCircleOutline } from 'react-icons/io';

type CategorizedData = {
  [category: string]: ICard[];
};

const Cookbook = () => {
  const { section } = useParams();
  const [categories, setCategories] = useState<string[]>([]);

  const categorizedData: CategorizedData = recipes.length > 0 ? recipes.reduce((acc, recipe) => {
    const category = recipe.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(recipe);
    return acc;
  }, {} as CategorizedData) : {};

  useEffect(() => {
    setCategories(Object.keys(categorizedData));
  }, []);

  const [visibleCategoriesAmount, setVisibleCategoriesAmount] = useState(2);
  const visibleCategories = categories.slice(0, visibleCategoriesAmount);

  const loadMoreCategories = () => {
    setVisibleCategoriesAmount(prevCount => prevCount + 2);
  };

  //   const dispatch = useDispatch();
  //   const [recipesList, setRecipesList] = useState([]);
  //   const [page, setPage] = useState(1);
  //   const [limit, setLimit] = useState(0);
  //   const [total, setTotal] = useState(0);

  //   const sectionType =
  //     section === 'myRecipes'
  //       ? 'Recipes'
  //       : section === 'savedRecipes'
  //       ? 'Save dRecipes'
  //       : section === 'savedIngredients'
  //       ? 'Saved Ingredients'
  //       : '';

  //   const [currentSection, setCurrentSection] = useState(section);

  //   useEffect(() => {
  //     const options = { page, limit, sectionType };
  //     dispatch(getRecepies(options)).then(({ payload }) => {
  //       setTotal(payload.total);
  //       setRecipesList(payload.data);
  //     });
  //   }, [dispatch, currentSection, limit, page]);

  return (
    <div>
      {section === 'myRecipes' && (
        <div>
          {recipes.length !== 0 ? (
            visibleCategories.map(category => (
              <RecipeSection key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <RecipesList>
                  <CardRecipes
                    key={category}
                    cards={categorizedData[category]}
                    areControlBtnsShowed={true}
                  />
                </RecipesList>
                <RedirectButtonWrapper>
                  <RedirectButton
                    path={'/all_recipes'}
                    isModal={false}
                    text={'Дивитись більше'}
                    backgroundcolor={gradient.red2}
                    textcolor={palette.mainWhite}
                  ></RedirectButton>
                </RedirectButtonWrapper>
              </RecipeSection>
            ))
          ) : (
            <CookBookTextWrapper>
              <CookBookText>
                Ваші кулінарні таланти можуть стати особливою родзинкою нашого
                порталу, поділіться своїм першим рецептом з нами!
              </CookBookText>
              <AddBtn $backgroundcolor={gradient.red2}>
                Додати рецепт <IoIosAddCircleOutline />
              </AddBtn>
            </CookBookTextWrapper>
          )}
          {categories.length >= 2 &&
            categories.length !== visibleCategories.length && (
              <LoadMoreBtn onClick={loadMoreCategories}>
                <LoadMore />
              </LoadMoreBtn>
            )}
        </div>
      )}
      {section === 'savedRecipes' && (
        <div>
          {recipes.length !== 0 ? (
            visibleCategories.map(category => (
              <RecipeSection key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <RecipesList>
                  <CardRecipes
                    key={category}
                    cards={categorizedData[category]}
                  />
                </RecipesList>
                <RedirectButtonWrapper>
                  <RedirectButton
                    path={'/all_recipes'}
                    isModal={false}
                    text={'Дивитись більше'}
                    backgroundcolor={gradient.red2}
                    textcolor={palette.mainWhite}
                  ></RedirectButton>
                </RedirectButtonWrapper>
              </RecipeSection>
            ))
          ) : (
            <CookBookTextWrapper>
              <CookBookText>
                Ми впевнені, що саме тут ви знайдете найцінніші смакові скарби
                та наповните свою кулінарну книгу новими смачними рецептами
              </CookBookText>
              <AddBtn $backgroundcolor={gradient.red2}>
                Додати рецепт <IoIosAddCircleOutline />
              </AddBtn>
            </CookBookTextWrapper>
          )}
          {categories.length >= 2 &&
            categories.length !== visibleCategories.length && (
              <LoadMoreBtn onClick={loadMoreCategories}>
                <LoadMore />
              </LoadMoreBtn>
            )}
        </div>
      )}
      {section === 'savedIngredients' && (
        <SavedIngredientsWrapper>
          <SavedIngredients />
        </SavedIngredientsWrapper>
      )}
    </div>
  );
};

export default Cookbook;
