import PropTypes from 'prop-types';
import { ButtonStyled } from './RedirectButton.styled';

const RedirectButton = ({ text, backgroundcolor, textcolor }) => {
  return (
    <ButtonStyled style={{ background: backgroundcolor, color: textcolor }}>
      {text}
    </ButtonStyled>
  );
};

export default RedirectButton;

RedirectButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundcolor: PropTypes.string.isRequired,
  textcolor: PropTypes.string.isRequired,
};
