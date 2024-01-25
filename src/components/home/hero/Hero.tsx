import InfoContainer from '../infoContainer/InfoContainer';
import {
  InitialPropsHero,
  InitialPropsMoreRecipes,
  InitialPropsWelcome,
} from '../../../helpers/swiperSlides/initialSwiperMainPage';

function Hero() {
  return (
    <>
      <InfoContainer InitialProps={InitialPropsHero} />
      <InfoContainer InitialProps={InitialPropsWelcome} />
      <InfoContainer InitialProps={InitialPropsMoreRecipes} />
    </>
  );
}

export default Hero;
