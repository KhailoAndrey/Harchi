import RedirectButton from '@/helpers/buttons/RedirectButton';
import { Container, RecipesList, SubTitle, Title } from './Cuisine.styled';
import { gradient, palette } from '@/constants/colors';

import cuisinePhoto from '../../../helpers/cuisineSlides/cuisinePhoto.json';

function Cuisine() {
  return (
    <Container>
      <Title>Українська кухня</Title>
      <SubTitle>
        Смак України в кожному страві: віддайте своїм смаковим почуттям
        українській кухні!
      </SubTitle>
      <RecipesList />
      <div className="redirbtn">
        <RedirectButton
          text={'Дивитись більше'}
          backgroundcolor={gradient.red2}
          textcolor={palette.mainWhite}
        ></RedirectButton>
      </div>
    </Container>
  );
}

export default Cuisine;
