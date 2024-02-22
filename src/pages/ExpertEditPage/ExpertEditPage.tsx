import MyProfile from '@/components/profile/myProfile/MyProfile';
import SavedIngredients from '@/components/ingredients/SavedIngredients';
import {
  Title,
  Wrapper,
  SavedIngredientsWrapper,
  Inner,
  SavedIngredientsTitle,
} from './ExpertEditPage.styled';
import { RiShoppingBagLine } from 'react-icons/ri';
import { palette } from '@/constants/colors';
import MyRecipes from '@/components/profile/myRecipes/MyRecipes';

const ExpertEditPage = () => {
  return (
    <Wrapper>
      <Title>Мій профіль</Title>
      <MyProfile />
      <SavedIngredientsWrapper>
        <Inner>
          <RiShoppingBagLine size={32} fill={palette.orange} />
          <SavedIngredientsTitle>Збережені інгредієнти</SavedIngredientsTitle>
        </Inner>
        <SavedIngredients />
      </SavedIngredientsWrapper>
      <MyRecipes />
    </Wrapper>
  );
};

export default ExpertEditPage;
