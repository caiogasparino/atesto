import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Box, Modal as BaseModal } from '@mui/material';

import { useModal } from '../../contexts/ModalContext';
import { Colors } from '../../styles/themes';
import Buttons from '../Buttons/Buttons';
export interface ModalProps {
  onPress?: () => void;
  title?: string;
  text?: string;
  children?: ReactNode;
  textBtnClose?: string;
  textBtnOpen?: string;
  btnOpen?: boolean;
  btnClose?: boolean;
  isOpen?: boolean;
}

export default function Modal({
  onPress,
  title,
  text,
  children,
  textBtnClose,
  textBtnOpen,
  btnOpen = false,
  btnClose = false,
}: ModalProps) {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) {
    return null;
  }

  return (
    <BaseModal open={isOpen} onClose={closeModal}>
      <Box sx={style.root}>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {children}
        {btnOpen ||
          (btnClose && (
            <Box sx={style.buttonContainer}>
              {btnOpen && (
                <Buttons
                  onClick={onPress}
                  variant="contained"
                  textButton={textBtnOpen}
                  customStyles={style.button}
                />
              )}
              {btnClose && (
                <Buttons
                  onClick={closeModal}
                  variant="contained"
                  textButton={textBtnClose}
                  customStyles={style.button}
                />
              )}
            </Box>
          ))}
      </Box>
    </BaseModal>
  );
}

export const Title = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: ${({ theme }) => theme.background};
`;

export const Text = styled.h1`
  font-size: 1em;
  text-align: center;
  color: ${({ theme }) => theme.background};
`;

const style = {
  root: {
    minWidth: '600px',
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Oswald-Regular',
    fontSize: '24px',
    border: `2px solid ${Colors.neutral[900]}`,
    boxShadow: 24,
    backgroundColor: `${Colors.neutral[280]}`,
    p: 4,
    '@media screen and (max-width: 700px)': {
      width: '100%',
      fontSize: '18px',
    },
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    height: '90%',
  },

  button: {
    height: '58px',
    width: '120px',
    borderRadius: '10px',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
    color: `${Colors.neutral[100]}`,
    backgroundColor: `${Colors.brand.default}`,
  },
};
