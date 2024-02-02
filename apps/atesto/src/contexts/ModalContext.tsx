import React, { createContext, ReactNode, useContext } from 'react';
import { useSelector } from 'react-redux';

import { selectModal } from '../store/modalSlice';

interface ModalContextProps {
  isOpen?: boolean;
  openModal?: () => void;
  closeModal?: () => void;
  children?: ReactNode;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  children: [],
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: ModalContextProps) => {
  const stateModal = useSelector(selectModal);
  const { isOpen } = stateModal;

  const openModal = () => stateModal.isOpen;
  const closeModal = () => !stateModal.isOpen;

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
