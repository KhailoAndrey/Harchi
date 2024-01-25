import InfoContainer from '../infoContainer/InfoContainer';
import { InitialPropsHero } from '../../../helpers/swiperSlides/initialSwiperMainPage';

function Hero() {
  return (
    <>
      <InfoContainer InitialProps={InitialPropsHero} />
    </>
  );
}

export default Hero;
