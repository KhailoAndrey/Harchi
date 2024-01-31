import { useEffect } from 'react';
import { useModal } from '../../../utils/context/Context';
import { ModalWindow, Overlay } from './FindRecipe.styled';

function FindRecipe() {
  const { isModalOpen, closeModal } = useModal();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    isModalOpen && (
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow>Підбір рецепту</ModalWindow>
      </Overlay>
    )
  );
}

export default FindRecipe;
