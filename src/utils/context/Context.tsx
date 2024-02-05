import React, { createContext, useState, useContext } from 'react';

interface ContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Context = createContext<ContextProps | null>(null);


export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = async () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const contextValue: ContextProps = {
    isModalOpen,
    openModal,
    closeModal,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};


export const useModal = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useModal must be used within a ContextProvider');
  }
  return context;
};
