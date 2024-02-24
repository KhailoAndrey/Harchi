import { lazy } from 'react';
import { InitialPropsHero } from '../../../helpers/swiperSlides/initialSwiperMainPage';

const InfoContainer = lazy(()=> import('../infoContainer/InfoContainer'));

function Hero() {
  return (
    <>
      <InfoContainer InitialProps={InitialPropsHero} />
    </>
  );
}

export default Hero;
