import PropTypes from 'prop-types';
// import { ReactComponent as ChevronRight } from '../../../public/heroSwiper/chevron-right.svg';
import { ButtonStyled } from './RedirectButton.styled';

const RedirectButton = ({ text, backgroundcolor, textcolor }) => {
  return (
    <ButtonStyled style={{ background: backgroundcolor, color: textcolor }}>
      {text}
      <svg width={28} height={28}>
        <use href="../../../public/heroSwiper/chevron-right.svg#chevron-right"></use>
      </svg>
      {/* <img src="../../../public/heroSwiper/chevron-right.svg" alt="right" /> */}
      {/* <ChevronRight /> */}
    </ButtonStyled>
  );
};

export default RedirectButton;

RedirectButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundcolor: PropTypes.string.isRequired,
  textcolor: PropTypes.string.isRequired,
};
