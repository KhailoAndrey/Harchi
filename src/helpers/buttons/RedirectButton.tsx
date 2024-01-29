// import PropTypes from 'prop-types';
// import ChevronRight from '../../../public/heroSwiper/chevron-right.svg';
import { ButtonStyled } from './RedirectButton.styled';
import { FaChevronRight } from 'react-icons/fa';


const RedirectButton = ({ text, backgroundcolor, textcolor }) => {
  return (
    <ButtonStyled $backgroundcolor={backgroundcolor} $textcolor={textcolor}>
      {text}
      <FaChevronRight />
      {/* <img
        src={`${ChevronRight}`}
        alt="chevron-right"
        width="28px"
        height="28px"
      /> */}
    </ButtonStyled>
  );
};

export default RedirectButton;

// RedirectButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   backgroundcolor: PropTypes.string.isRequired,
//   textcolor: PropTypes.string.isRequired,
// };
