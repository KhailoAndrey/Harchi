import {
  Animation,
  BackBtn,
  Container,
  InfoBlock,
  InfoContainer,
  InfoDescription,
  InfoTitle,
  TextBtn,
  Wrapper,
  Zero,
} from './NotFoundPage.styled';
import animationGif from '@/assets/images/404/Animation.gif';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Container>
        <Zero>
          <Animation src={animationGif} alt="animation" />
        </Zero>
        <InfoContainer>
          <InfoBlock>
            <InfoTitle>Здається щось пішло не так...</InfoTitle>
            <InfoDescription>
              Здається, що цю сторінку не знайдено. Поверніться на головну та
              спробуйте знову пізніше
            </InfoDescription>
          </InfoBlock>
          <BackBtn to={'/'}>
            <TextBtn>На головну</TextBtn>
          </BackBtn>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
};

export default NotFoundPage;
