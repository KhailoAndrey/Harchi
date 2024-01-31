// import ChevronRight from '../../../public/heroSwiper/chevron-right.svg';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from './RedirectButton.styled';
import { FaChevronRight } from 'react-icons/fa';
import { useModal } from '../../utils/context/Context';

const RedirectButton = ({
  text,
  backgroundcolor,
  textcolor,
  path,
  isModal,
}) => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const handleClick = () => {
    if (!isModal) {
      navigate(path);
    } else {
      openModal(true);
      // console.log(`Открываю модалку: ${isModal}`);
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
