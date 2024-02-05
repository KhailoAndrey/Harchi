import RedirectButton from '@/helpers/buttons/RedirectButton';
import { Container, RecipesList, SubTitle, Title } from './Cuisine.styled';
import { gradient, palette } from '@/constants/colors';
import CardRecipes from '@/helpers/cardOfRecipes/cardRecipes';
import cards from '../../../helpers/cuisineSlides/cuisine.json';

function Cuisine() {
  return (
    <Container>
      <Title>Українська кухня</Title>
      <SubTitle>
        Смак України в кожному страві: віддайте своїм смаковим почуттям
        українській кухні!
      </SubTitle>
      <RecipesList>
        <CardRecipes cards={cards} />
      </RecipesList>

      <div className="redirbtn">
        <RedirectButton
          isModal={false}
          path={'/'}
          text={'Дивитись більше'}
          backgroundcolor={gradient.red2}
          textcolor={palette.mainWhite}
        ></RedirectButton>
      </div>
    </Container>
  );
}

export default Cuisine;
