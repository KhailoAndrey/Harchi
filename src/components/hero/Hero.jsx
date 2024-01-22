import InfoContainer from '../infoContainer/InfoContainer';
import {
  InitialPropsHero,
  InitialPropsWelcome,
} from '../../helpers/swiperSlides/initialSwiperMainPage.js';

function Hero() {
  return (
    <>
      <InfoContainer InitialProps={InitialPropsHero} />
      <InfoContainer InitialProps={InitialPropsWelcome} />
    </>
  );
}

export default Hero;
