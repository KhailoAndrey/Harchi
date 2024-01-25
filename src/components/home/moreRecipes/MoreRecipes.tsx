import InfoContainer from '../infoContainer/InfoContainer';
import { InitialPropsMoreRecipes } from '../../../helpers/swiperSlides/initialSwiperMainPage';

function MoreRecipes() {
  return (
    <>
      <InfoContainer InitialProps={InitialPropsMoreRecipes} />
    </>
  );
}

export default MoreRecipes;
