import {Overlay, Wrapper, CloseBtn} from "./Modal.styled"
import { IoClose } from "react-icons/io5";
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <Wrapper>
            <CloseBtn onClick={onClose}>
              <IoClose fill="#FBF8F6" width={24}/>
            </CloseBtn>
            {children}
          </Wrapper>
        </Overlay>
      )}
    </>
  );
};

export default Modal;