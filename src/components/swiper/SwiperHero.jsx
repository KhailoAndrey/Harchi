import SwiperCore from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Scrollbar } from 'swiper/modules';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import slides from '../../helpers/swiperSlides/slides.json';
import { SwiperScrollBar } from './SwiperHero.styled';

SwiperCore.use([Autoplay, Scrollbar, EffectFade]);

function SwiperHero({ sliceStartIndex, width }) {
  const carouselSettings = {
    spaceBetween: 0,
    slidesPerView: 1,
    initialSlide: 0,
    speed: 2000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    loopAddBlankSlides: true,
    scrollbar: {
      dragClass: 'swiper-scrollbar-drag',
      draggable: true,
      dragSize: '68',
      el: '.swiper-scrollbar',
      hide: false,
    },
  };

  const SwiperSlideImg = ({ photo, alt }) => {
    return <img src={`./heroSwiper/${photo}`} alt={alt} />;
  };

  const swiperSlides = slides
    .slice(sliceStartIndex, sliceStartIndex + 3)
    .map(({ id, photo, alt }) => (
      <SwiperSlide key={id}>
        <SwiperSlideImg photo={photo} alt={alt} />
      </SwiperSlide>
    ));
  return (
    <Swiper {...carouselSettings}>
      {swiperSlides}
      <SwiperScrollBar
        className="swiper-scrollbar swiper-scrollbar-horizontal swiper-scrollbar-drag"
        ml={width}
      />
    </Swiper>
  );
}

export default SwiperHero;

SwiperHero.propTypes = {
  sliceStartIndex: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  photo: PropTypes.string,
  alt: PropTypes.string,
};
