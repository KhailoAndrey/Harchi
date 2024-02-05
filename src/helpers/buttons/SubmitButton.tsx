import { ButtonStyled } from './SubmitButton.styled';

const SubmitButton = ({ text, backgroundcolor, textcolor }) => {
  return (
    <ButtonStyled
      type="submit"
      $backgroundcolor={backgroundcolor}
      $textcolor={textcolor}
    //   onClick={onClick}
    >
      {text}
    </ButtonStyled>
  );
};

export default SubmitButton;
