import React from 'react';
import { useDispatch } from 'react-redux';

import { Box, CardMedia, Typography } from '@mui/material';

import { Images } from '../../assets';
import BarcodeGenerator from '../../components/BarcodeGenerator/BarcodeGenerator';
import Buttons from '../../components/Buttons/Buttons';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import { LocaleBr } from '../../locale';
import { openModal } from '../../store/modalSlice';

import { BoxAttest, Container, styles } from './styles';
export interface ThrowAttestProps {
  textButton?: string;
  customStyle?: React.CSSProperties;
}

export const ThrowAttest = (props: ThrowAttestProps) => {
  const dispatch = useDispatch();
  const locale = LocaleBr;
  const LogoAttest = Images.throwAttest.image.ImageThrowAttest;

  const handleOpen = () => {
    dispatch(openModal());
  };

  return (
    <Container>
      <Header title={locale.throwAttest.menu} />
      <BoxAttest>
        <Box sx={styles.boxTitle}>
          <Typography sx={styles.typography.title}>
            {locale.throwAttest.title}
          </Typography>
        </Box>
        <CardMedia sx={styles.imageAttest} component="img" image={LogoAttest} />
        <Box sx={styles.box}>
          <Modal
            title={locale.throwAttest.modalTitle}
            children={<BarcodeGenerator />}
          />
        </Box>
        <Buttons
          onClick={handleOpen}
          variant="contained"
          customStyles={styles.buttom}
          textButton={locale.throwAttest.textButtonBar}
        />
      </BoxAttest>
    </Container>
  );
};
