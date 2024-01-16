import RedirectButton from '../../helpers/buttons/RedirectButton';
import SwiperHero from '../swiper/SwiperHero';
import { Container, Info, Slider, Wrapper } from './Hero.styled';

function Hero() {
  return (
    <Wrapper>
      <Container>
        <Info>
          Кулінарний шик: знайдіть свій ідеальний рецепт за допомогою легкого та
          швидкого пошуку за фільтрами
        </Info>
        <RedirectButton
          text="Спробувати"
          backgroundcolor="linear-gradient(124deg, #EE7214 13.2%, #F4A322 63.1%, #FAD531 93.71%)"
          textcolor="#F5F1EC"
        ></RedirectButton>
      </Container>
      <Slider>
        <SwiperHero />
      </Slider>
    </Wrapper>
  );
}

export default Hero;
