import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const SwiperSlideImg = ({ photo, alt }) => {
  const [slide, setSlide] = useState(null);

  // useEffect(() => {
  //   import.meta.env
  //     .import(photo)
  //     .then(image => {
  //       setSlide(image.default);
  //     })
  //     .catch(error => {
  //       console.error('Error loading the image:', error);
  //     });
  // }, [photo]);
  useEffect(() => {
    const importImage = async () => {
      try {
        const imageModule = await import(`../../../public/${photo}`);
        setSlide(imageModule.default);
      } catch (error) {
        console.error('Error loading the image:', error);
      }
    };

    importImage();
  }, [photo]);
  return <>{slide && <img src={slide} alt={alt} />}</>;
};

export default SwiperSlideImg;

SwiperSlideImg.propTypes = {
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
