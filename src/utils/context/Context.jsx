import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = async () => {
      setModalOpen(true);    
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Context.Provider
      value={{ isModalOpen, openModal, closeModal}}
    >
      {children}
    </Context.Provider>
  );
};

export const useModal = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useModal must be used within a ContextProvider');
  }
  return context;
};
