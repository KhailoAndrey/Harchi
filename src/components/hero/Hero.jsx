import { InfoBlock, Info, Slider, Container, InfoText } from './Hero.styled';
import RedirectButton from '../../helpers/buttons/RedirectButton';
import SwiperHero from '../swiper/SwiperHero';

function Hero() {
  return (
    <>
      <Container width={'100%'}>
        <InfoBlock
          size={{ w: '732px', h: '675px' }}
          bgc={'#527853'}
          gap={`48px`}
          pl={'80px'}
        >
          <Info>
            Кулінарний шик: знайдіть свій ідеальний рецепт за допомогою легкого
            та швидкого пошуку за фільтрами
          </Info>
          <RedirectButton
            text="Спробувати"
            backgroundcolor="linear-gradient(124deg, #EE7214 13.2%, #F4A322 63.1%, #FAD531 93.71%)"
            textcolor="#F5F1EC"
          ></RedirectButton>
        </InfoBlock>
        <Slider size={{ w: '708px', h: '675px' }}>
          <SwiperHero sliceStartIndex={0} />
        </Slider>
      </Container>
      <Container width={'1280px'}>
        <Slider size={{ w: '628px', h: '472px' }}>
          <SwiperHero sliceStartIndex={3} />
        </Slider>
        <InfoBlock
          size={{ w: '652px', h: '472px' }}
          bgc={'#9C2B3F'}
          gap={'24px'}
          pl={'24px'}
        >
          <Info>Ласкаво просимо на наш кулінарний портал</Info>
          <InfoText>
            Наш сайт розроблений для всіх — незалежно від вашого досвіду у
            готуванні. Відкрийте для себе найсмачніші домашні рецепти, які легко
            і швидко приготувати
          </InfoText>
        </InfoBlock>
      </Container>
    </>
  );
}

export default Hero;
