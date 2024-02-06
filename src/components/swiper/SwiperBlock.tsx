import SwiperCore from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import slides from '../../helpers/swiperSlides/slides.json';
import { SwiperScrollBar } from './SwiperBlock.styled';

SwiperCore.use([Autoplay, Scrollbar, EffectFade]);

interface ISwiperBlock {
  loop: boolean;
  sliceStartIndex: number;
  width: number;
}
function SwiperBlock({ loop, sliceStartIndex, width }: ISwiperBlock) {
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
    loop: loop,
    loopAddBlankSlides: true,
    scrollbar: {
      dragClass: 'swiper-scrollbar-drag',
      draggable: true,
      dragSize: 68,
      el: '.swiper-scrollbar',
      hide: false,
    },
  };

  const swiperSlides = slides
    .slice(sliceStartIndex, sliceStartIndex + 3)
    .map(({ id, photo, alt }) => (
      <SwiperSlide key={id}>
        <img src={`./heroSwiper/${photo}`} alt={alt} />
      </SwiperSlide>
    ));
  return (
    <Swiper {...carouselSettings}>
      {swiperSlides}
      <SwiperScrollBar
        className="swiper-scrollbar swiper-scrollbar-horizontal swiper-scrollbar-drag"
        $ml={width}
      />
    </Swiper>
  );
}

export default SwiperBlock;