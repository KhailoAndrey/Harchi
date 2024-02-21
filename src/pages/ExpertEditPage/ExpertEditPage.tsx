import ExpertProfile from '@/components/authors/profile/ExpertProfile';
import { Title, Wrapper, Inner, SavedIngredientsTitle } from './ExpertEditPage.styled';
import SavedIngredients from '@/components/ingredients/SavedIngredients';
import { RiShoppingBagLine } from 'react-icons/ri';
import { palette } from '@/constants/colors';

const ExpertEditPage = () => {
  return (
    <Wrapper>
      <Title>Мій профіль</Title>
      <ExpertProfile />
      <Inner>
        <RiShoppingBagLine size={32} fill={palette.orange} />
        <SavedIngredientsTitle>Збережені інгредієнти</SavedIngredientsTitle>
      </Inner>
      <SavedIngredients />
    </Wrapper>
  );
};

export default ExpertEditPage;
