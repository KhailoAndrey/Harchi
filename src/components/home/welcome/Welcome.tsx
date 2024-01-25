import InfoContainer from '../infoContainer/InfoContainer';
import { InitialPropsWelcome } from '../../../helpers/swiperSlides/initialSwiperMainPage';

function Welcome() {
  return (
    <>
      <InfoContainer InitialProps={InitialPropsWelcome} />
    </>
  );
}

export default Welcome;
