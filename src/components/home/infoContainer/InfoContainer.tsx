import PropTypes from 'prop-types';
import {
  Container,
  Info,
  InfoBlock,
  InfoText,
  Slider,
} from './InfoContainer.styled';
import RedirectButton from '../../../helpers/buttons/RedirectButton';
import SwiperBlock from '../../swiper/SwiperBlock';
import { IInitialProps } from '@/types';

interface IInfoContainer {
  InitialProps: IInitialProps;
}
function InfoContainer({ InitialProps }: IInfoContainer) {
  return (
    <Container
      width={InitialProps.containerWidth}
      $borderradius={InitialProps?.borderradius || ''}
    >
      <>
        {InitialProps.swiperflag === 'left' && (
          <Slider size={InitialProps.slider.size}>
            <SwiperBlock
              loop={InitialProps.swiperblock.loop}
              sliceStartIndex={InitialProps.swiperblock.slicestartindex}
              width={InitialProps.swiperblock.width}
            />
          </Slider>
        )}
        <InfoBlock
          size={InitialProps.infoblock.size}
          $bgc={InitialProps.infoblock.bgc}
          $gap={InitialProps.infoblock.gap}
          $pl={InitialProps.infoblock.pl}
        >
          <Info>{InitialProps.info}</Info>
          {InitialProps.infotext && (
            <InfoText>{InitialProps.infotext}</InfoText>
          )}
          {InitialProps.redirectionbutton && (
            <RedirectButton
              isModal={InitialProps.redirectionbutton.isModal}
              path={InitialProps.redirectionbutton.path}
              text={InitialProps.redirectionbutton.text}
              backgroundcolor={InitialProps.redirectionbutton.backgroundcolor}
              textcolor={InitialProps.redirectionbutton.textcolor}
            />
          )}
        </InfoBlock>
        {InitialProps.swiperflag === 'right' && (
          <Slider size={InitialProps.slider.size}>
            <SwiperBlock
              loop={InitialProps.swiperblock.loop}
              sliceStartIndex={InitialProps.swiperblock.slicestartindex}
              width={InitialProps.swiperblock.width}
            />
          </Slider>
        )}
      </>
    </Container>
  );
}
export default InfoContainer;

InfoContainer.propTypes = {
  InitialProps: PropTypes.shape({
    swiperflag: PropTypes.string.isRequired,
    containerWidth: PropTypes.string.isRequired,
    infoblock: PropTypes.shape({
      size: PropTypes.shape({
        w: PropTypes.string.isRequired,
        h: PropTypes.string.isRequired,
      }).isRequired,
      bgc: PropTypes.string.isRequired,
      gap: PropTypes.string.isRequired,
      pl: PropTypes.string.isRequired,
    }).isRequired,
    info: PropTypes.string.isRequired,
    infotext: PropTypes.string,
    redirectionbutton: PropTypes.shape({
      text: PropTypes.string.isRequired,
      backgroundcolor: PropTypes.string.isRequired,
      textcolor: PropTypes.string.isRequired,
    }),
    slider: PropTypes.shape({
      size: PropTypes.shape({
        w: PropTypes.string.isRequired,
        h: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    swiperblock: PropTypes.shape({
      loop: PropTypes.bool.isRequired,
      slicestartindex: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
