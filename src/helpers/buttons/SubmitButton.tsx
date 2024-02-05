import { ButtonStyled } from './SubmitButton.styled';

interface ISubmitButton {
  text: string, backgroundcolor: string, textcolor: string
}
const SubmitButton = ({ text, backgroundcolor, textcolor }: ISubmitButton) => {
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
