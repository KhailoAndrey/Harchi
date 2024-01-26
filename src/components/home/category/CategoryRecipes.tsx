import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import slides from '../../../helpers/categorySlides/slides.json';

import { Container, Slider, Title } from './CategoryRecipes.styled';

SwiperCore.use([Autoplay, EffectFade, Pagination, Grid]);

export default function CategoryRecipes() {
  const carouselSettings = {
    spaceBetween: 24,
    slidesPerView: 4,
    initialSlide: 0,
    speed: 2000,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true,
    // },
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    loop: true,
    loopAddBlankSlides: true,
    grid: {
      fill: 'column',
      rows: 2,
    },
    pagination: {
      clickable: true,
    },
  };

  const swiperSlides = slides.map(({ id, photo, alt }) => (
    <SwiperSlide key={id}>
      <img src={`./categorySwaiper/${photo}`} alt={alt} />
    </SwiperSlide>
  ));

  return (
    <Container>
      <Title>Категорія рецептів</Title>
      <Slider>
        {slides.length > 0 && (
          <Swiper {...carouselSettings}>{swiperSlides}</Swiper>
        )}
      </Slider>
    </Container>
  );
}
