import React, { useContext, useRef, useState } from 'react';
import { FaFileCsv } from 'react-icons/fa';
import { MdFactCheck, MdOutlineCheckCircleOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Typography,
} from '@mui/material';

import { Images } from '../../assets';
import Buttons from '../../components/Buttons/Buttons';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import { UploadContext } from '../../contexts/ThrowUploadContext/ThrowUploadContext';
import { initialState, useImageUpload } from '../../hooks/useImageUpload';
import { LocaleBr } from '../../locale';
import { closeModal, openModal } from '../../store/modalSlice';
import { Colors } from '../../styles/themes';

import { BoxAttest, Container, styles } from './styles';

export interface UploadCsvProps {
  textButton?: string;
  customStyle?: React.CSSProperties;
}

export const UploadCsv = (props: UploadCsvProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setSomeStateImage, setSomeStateItems } = useContext(UploadContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { loading, updateResult, setUpdateResult, uploadImage } =
    useImageUpload();
  const [dragging, setDragging] = useState(false);

  const [checkType, setCheckType] = useState<'SALE' | 'SHIPPING'>('SALE');
  const [file, setFile] = useState<File>();

  const SALE_TYPE = checkType === 'SALE';
  const SHIPPING_TYPE = checkType === 'SHIPPING';

  const locale = LocaleBr;
  const IconUpload = Images.icons.IconUpload;
  const urlPath = SALE_TYPE ? 'UploadFile/NotaVenda' : 'UploadFile/NotaRemessa';
  const paramsPath = 'arquivoCsv';

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event?.dataTransfer.files[0];
    handleFile(file);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (file?.type !== 'text/csv') {
      alert(locale.uploadCsv.alertlabel);
      return;
    }
    setFile(file as File);
    dispatch(openModal());
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleConfirm = () => {
    setCheckType(checkType);
    setUpdateResult(initialState);
  };

  const handleCheck = () => {
    dispatch(closeModal());
    if (file) {
      if (SALE_TYPE) {
        setSomeStateImage({ file: file, url: urlPath, params: paramsPath });
        uploadImage(file as File, paramsPath, urlPath);
      } else if (SHIPPING_TYPE) {
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

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Container>
      <Header title={locale.uploadCsv.titleUploadInvoice} />
      <BoxAttest>
        <Box sx={styles.boxTitle}>
          <Button sx={styles.button} onClick={handleClick}>
            {loading && <CircularProgress style={{ color: '#fff' }} />}
            {!loading && (
              <>
                {locale.uploadCsv.buttonLoadCsv}
                <input
                  type="file"
                  ref={inputRef}
                  accept=".csv"
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />

                {!updateResult?.success && (
                  <FaFileCsv size={30} color="#fff" style={{ margin: 10 }} />
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
          <FormControlLabel
            label={locale.uploadCsv.titleSale}
            control={
              <Checkbox
                checked={checkType && checkType === 'SALE'}
                onChange={() => setCheckType('SALE')}
                sx={{
                  color: Colors.font.default,
                  '&.Mui-checked': {
                    color: Colors.font.default,
                  },
                }}
              />
            }
          />
          <FormControlLabel
            label={locale.uploadCsv.titleShipping}
            control={
              <Checkbox
                checked={checkType && checkType === 'SHIPPING'}
                onChange={() => setCheckType('SHIPPING')}
                sx={{
                  color: Colors.font.default,
                  '&.Mui-checked': {
                    color: Colors.font.default,
                  },
                }}
              />
            }
          />
        </Box>
        <Box
          sx={styles.boxImage}
          className={`drop-zone${dragging ? ' dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {updateResult?.success ? (
            <MdFactCheck size={'60%'} fill="#8bc34a" style={{ margin: 10 }} />
          ) : (
            <>
              <CardMedia
                sx={styles.imageAttest}
                component="img"
                image={IconUpload}
              />
              <Typography>{locale.uploadCsv.label}</Typography>
            </>
          )}
        </Box>

        <Box sx={styles.footerbutton}>
          <Button sx={styles.button} onClick={handleClick}>
            {loading && <CircularProgress style={{ color: '#fff' }} />}
            {!loading && <div>{locale.uploadCsv.buttonSendCsv}</div>}
          </Button>

          <Box sx={styles.box}>
            <Modal
              title={
                SALE_TYPE
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
          {updateResult?.success && SALE_TYPE && (
            <Buttons
              textButton={LocaleBr.throwAttest.confirm}
              onClick={handleConfirm}
            />
          )}
          {SHIPPING_TYPE && (
            <Buttons
              textButton={LocaleBr.throwAttest.confirm}
              onClick={handleNavigate}
            />
          )}
        </Box>
        {file?.name && SALE_TYPE && updateResult?.success && (
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
        {file?.name && SHIPPING_TYPE && updateResult?.success && (
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
