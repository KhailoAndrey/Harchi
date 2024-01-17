import SwiperCore from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import SwiperSlideImg from '../../helpers/swiperSlides/swiperItem';
import slides from '../../helpers/swiperSlides/slides.json';
import { SwiperScrollBar } from './SwiperHero.styled';

SwiperCore.use([Autoplay, Scrollbar]);

function SwiperHero({ sliceStartIndex }) {
  const carouselSettings = {
    spaceBetween: 0,
    slidesPerView: 1,
    initialSlide: 0,
    speed: 2000,
    effect: 'fade',
    fadeEffect: {
      crossFade: false,
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
      //   dragSize: '300px',
      el: '.swiper-scrollbar',
      hide: false,
      horizontalClass: 'swiper-scrollbar-horizontal',
      //   snapOnRelease: true,
    },
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
      <SwiperScrollBar className="swiper-scrollbar swiper-scrollbar-horizontal swiper-scrollbar-drag" />
    </Swiper>
  );
}

export default SwiperHero;

SwiperHero.propTypes = {
  sliceStartIndex: PropTypes.number.isRequired,
};
