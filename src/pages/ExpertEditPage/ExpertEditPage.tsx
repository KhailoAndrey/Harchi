import { IExpert } from '@/types';
import ProfileHeader from '@/components/profile/profileHeader/ProfileHeader';
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
import ProfileDashboard from '@/components/profile/profileDashboard/ProfileDashboard';

const expert: IExpert = {
  id: 1,
  email: 'myemail@gmail.com',
  photo: 'public/experts/photo1.png',
  profession: 'Кухар, телеведучий',
  recipeAmount: 50,
  rating: 4.9,
  ratingAmount: 123,
  name: 'Поліна Світлоока',
  description:
    'Кулінарія - це вміння створювати із звичайних інгредієнтів щось неймовірно смачне',
};

const ExpertEditPage = () => {
  return (
    <Wrapper>
      <Title>Мій профіль</Title>
      <ProfileHeader expert={expert} />
      <ProfileDashboard expert={expert} />
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
