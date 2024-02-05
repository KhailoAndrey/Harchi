// import ChevronRight from '../../../public/heroSwiper/chevron-right.svg';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from './RedirectButton.styled';
import { FaChevronRight } from 'react-icons/fa';
import { useModal } from '../../utils/context/Context';

interface IRedirectButton {
  text: string,
  backgroundcolor: string,
  textcolor: string,
  path?: string,
  isModal?: boolean,
}
const RedirectButton = ({
  text,
  backgroundcolor,
  textcolor,
  path,
  isModal,
}: IRedirectButton) => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const handleClick = () => {
    if (!isModal && path) {
      navigate(path);
    } else {
      openModal();
    }
  };

  return (
    <ButtonStyled
      $backgroundcolor={backgroundcolor}
      $textcolor={textcolor}
      onClick={handleClick}
    >
      {text}
      <FaChevronRight />
    </ButtonStyled>
  );
};

export default RedirectButton;
