import React, { useContext, useRef, useState } from 'react';
import {
  MdAddPhotoAlternate,
  MdFactCheck,
  MdOutlineCheckCircleOutline,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';

import { Images } from '../../assets';
import Buttons from '../../components/Buttons/Buttons';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import { UploadContext } from '../../contexts/ThrowUploadContext/ThrowUploadContext';
import { initialState, useImageUpload } from '../../hooks/useImageUpload';
import { LocaleBr } from '../../locale';
import { getAttestDataId } from '../../store/attestIdSlice';
import { closeModal, openModal } from '../../store/modalSlice';

import { BoxAttest, Container, styles } from './styles';

export interface ThrowUploadProps {
  textButton?: string;
  customStyle?: React.CSSProperties;
}

export const ThrowUpload = (props: ThrowUploadProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const attestDataId = useSelector(getAttestDataId);

  const base64 = attestDataId?.attestDataId?.imagemInvoicebase64;

  const { setSomeStateImage, setSomeStateItems } = useContext(UploadContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { loading, updateResult, setUpdateResult, uploadImage } =
    useImageUpload();

  const [uploadType, setUploadType] = useState<'INVOICE' | 'ITEMS'>('INVOICE');
  const [file, setFile] = useState<File>();

  const invoiceType = uploadType === 'INVOICE';
  const itemsType = uploadType === 'ITEMS';

  const locale = LocaleBr;
  const LogoAttest = Images.throwAttest.image.ImageThrowAttest;
  const urlPath = invoiceType ? 'ImagemNota' : 'ImagemProduto';
  const paramsPath = invoiceType ? 'imagemDaNota' : 'imagemDoProduto';

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleConfirm = () => {
    setUploadType('ITEMS');
    setUpdateResult(initialState);
  };

  const handleCheck = () => {
    dispatch(closeModal());
    if (file) {
      if (invoiceType) {
        setSomeStateImage({ file: file, url: urlPath, params: paramsPath });
        uploadImage(file as File, paramsPath, urlPath);
      } else if (itemsType) {
        setSomeStateItems({ file: file, url: urlPath, params: paramsPath });
        uploadImage(file as File, paramsPath, urlPath);
      }
    }
  };

  const handleNavigate = () => {
    navigate('/throw-check', {
      state: { check: true },
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFile(file as File);
    dispatch(openModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  // const src = `data:image/png;base64,${NFVbase64}`;

  console.log('NFVbase64NFVbase64NFVbase64NFVbase64', base64);

  return (
    <Container>
      <Header title={locale.throwAttest.menu} />
      <BoxAttest>
        <Box sx={styles.boxTitle}>
          <Typography sx={styles.typography.title}>
            {invoiceType
              ? locale.throwUpload.titleInvoice
              : locale.throwUpload.titleItems}
          </Typography>
        </Box>
        {updateResult?.success ? (
          <MdFactCheck size={'60%'} fill="#8bc34a" style={{ margin: 10 }} />
        ) : (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          // <img src={src} alt="Base64-decode image" width="400" height="300" />
          <CardMedia
            sx={styles.imageAttest}
            component="img"
            image={LogoAttest}
          />
        )}

        <Box sx={styles.footerbutton}>
          <Button sx={styles.button} onClick={handleClick}>
            {loading && <CircularProgress style={{ color: '#fff' }} />}
            {!loading && (
              <>
                {invoiceType
                  ? locale.throwUpload.uploadImageInvoice
                  : locale.throwUpload.uploadImageItems}
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                {!updateResult?.success && (
                  <MdAddPhotoAlternate
                    size={30}
                    fill="#fff"
                    style={{ margin: 10 }}
                  />
                )}
                {updateResult?.success && (
                  <MdOutlineCheckCircleOutline
                    size={30}
                    fill="#8bc34a"
                    style={{ margin: 10 }}
                  />
                )}
              </>
            )}
          </Button>

          <Box sx={styles.box}>
            <Modal
              title={
                invoiceType
                  ? locale.throwUpload.uploadInvoiceIsTrue
                  : locale.throwUpload.uploadItemsIsTrue
              }
              children={
                <Box sx={styles.buttonContainer}>
                  <Buttons
                    onClick={handleCheck}
                    variant="contained"
                    textButton={locale.component.modal.btnConfirm}
                  />
                  <Buttons
                    onClick={handleClose}
                    variant="contained"
                    textButton={locale.component.modal.btnCancel}
                  />
                </Box>
              }
            />
          </Box>
          {updateResult?.success && invoiceType && (
            <Buttons
              textButton={LocaleBr.throwAttest.confirm}
              onClick={handleConfirm}
            />
          )}
          {itemsType && (
            <Buttons
              textButton={LocaleBr.throwAttest.confirm}
              onClick={handleNavigate}
            />
          )}
        </Box>
        {file?.name && invoiceType && updateResult?.success && (
          <Box
            sx={{
              marginTop: '12px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#8bc34a99',
              borderRadius: 4,
              paddingLeft: '12px',
              paddingRight: '12px',
            }}
          >
            <p>
              <b>{file.name}</b>
            </p>
            <MdOutlineCheckCircleOutline
              size={30}
              fill="#fff"
              style={{ margin: 10 }}
            />
          </Box>
        )}
        {file?.name && itemsType && updateResult?.success && (
          <Box
            sx={{
              marginTop: '12px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#8bc34a99',
              borderRadius: 4,
              paddingLeft: '12px',
              paddingRight: '12px',
            }}
          >
            <p>
              <b>{file.name}</b>
            </p>
            <MdOutlineCheckCircleOutline
              size={30}
              fill="#fff"
              style={{ margin: 10 }}
            />
          </Box>
        )}
      </BoxAttest>
    </Container>
  );
};
