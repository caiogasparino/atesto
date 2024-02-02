import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import Barcode from 'react-barcode';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { Alert, Box, CircularProgress, Stack, TextField } from '@mui/material';

// import { useModal } from '../../contexts/ModalContext';
import { useGetInvoice } from '../../hooks/useGetInvoice';
import { LocaleBr } from '../../locale';
import { closeModal } from '../../store/modalSlice';
import { selectCurrentStep } from '../../store/stepSlice';
import { Colors } from '../../styles/themes';
import BarcodeScanner from '../BarcodeQuagga/BarcodeScanner';
import Buttons from '../Buttons/Buttons';

export function BarcodeGenerator() {
  // const { closeModal } = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentStep = useSelector(selectCurrentStep);
  const [barcode, setBarcode] = useState('');
  const { loading, error, getInvoiceId } = useGetInvoice();
  const [scanner, setOpenScanner] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);
  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  const locale = LocaleBr;

  const height = width > 420 ? 940 : 320;
  const widthscann = width > 420 ? 320 : 940;

  useEffect(() => {
    if (currentStep === 2) {
      navigate('/throw-check');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      // setIsSmallScreen(newWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setBarcode(event.target.value ? event.target.value : '');
    setOpenScanner(false);
  };

  const handleBarcodeDetected = (result: {
    codeResult: { code: SetStateAction<string> };
  }) => {
    setBarcode(result.codeResult.code);
  };

  const handleScanner = (openScanner: boolean) => {
    setOpenScanner(openScanner);
  };

  const handleConfirm = () => {
    getInvoiceId(barcode);
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Container>
      <Box>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
            <CircularProgress />
          </Box>
        )}
        {!loading && (
          <Box sx={styles.container}>
            {!scanner && (
              <Box style={styles.inputArea}>
                <TextField
                  onChange={handleChange}
                  style={styles.input}
                  value={barcode}
                  placeholder={barcode}
                  inputProps={{ maxLength: 80 }}
                  label="Código de barras"
                  size="medium"
                  variant="outlined"
                  color="secondary"
                />
                <DocumentScannerIcon
                  style={styles.icon}
                  onClick={() => handleScanner(true)}
                />
              </Box>
            )}

            {error && (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="outlined" severity="error">
                  Por favor tente novamente..
                </Alert>
              </Stack>
            )}

            {scanner && (
              <BarcodeScanner
                height={height}
                width={widthscann}
                onDetected={handleBarcodeDetected}
              />
            )}
            <Box style={styles.barcode}>
              {!scanner && barcode && (
                <Barcode
                  background={`${Colors.neutral[280]}`}
                  value={barcode}
                />
              )}
            </Box>

            <Box sx={styles.buttonContainer}>
              <Buttons
                onClick={handleConfirm}
                variant="contained"
                textButton={locale.component.modal.btnConfirm}
              />
              <Buttons
                onClick={handleCloseModal}
                variant="contained"
                textButton={locale.component.modal.btnCancel}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default BarcodeGenerator;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const styles = {
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    margin: 8,
  },
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    width: 400,
  },
  icon: {
    marginLeft: '5px',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttom: {
    height: '60px',
    width: '300px',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
    borderRadius: '10px',
    color: `${Colors.neutral[100]}`,
    backgroundColor: `${Colors.brand.default}`,
    marginRight: 10,
    marginLeft: 10,
  },
  barcode: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  scanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
    marginTop: 30,
    marginBottom: 80,
  },
  barcodeTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    width: 100,
  },
  barcodeTextArea: {
    fontSize: 18,
    width: 250,
    height: 50,
  },
  buttonFab: {
    height: 20,
  },
};
