/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Add from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TableInvoice from '../../components/Table/TableInvoice';
import { useGetContract } from '../../hooks/useGetContract';
import { useGetInvoice } from '../../hooks/useGetInvoice';
import { LocaleBr } from '../../locale';
import { getContractData } from '../../store/contractSlice';
import { getInvoiceData } from '../../store/invoiceSlice';

import { Container, styles, Wrapper } from './styles';

export const ManageInvoice = () => {
  const locale = LocaleBr;
  const navigate = useNavigate();
  const { getContract } = useGetContract();
  const { loading, getInvoice } = useGetInvoice();
  const contract = useSelector(getContractData);
  const invoice = useSelector(getInvoiceData);

  useEffect(() => {
    const init = async () => {
      getContract();
      getInvoice();
    };
    init();
  }, []);

  const countContract = (nrContrato?: string) => {
    return invoice?.filter((item) => item.contrato === nrContrato).length;
  };

  return (
    <Wrapper>
      <Header title={locale.dataManagement.menu} />
      <Container>
        {contract?.map((item, index) => (
          <Accordion sx={styles.accordion}>
            <AccordionSummary
              key={index}
              expandIcon={<ExpandMoreIcon sx={styles.expandIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Add
                sx={styles.add}
                onClick={() => {
                  navigate('/upload-csv', { state: { contract: item.id } });
                }}
                color="primary"
              />
              <Typography>
                {`Contrato ${item.id} - `}
                {`${countContract(item.nrContrato)} notas`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableInvoice
                type="simple"
                invoiceData={invoice?.filter(
                  (item) => item.contrato === contract[index].nrContrato
                )}
                loading={loading}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Footer />
    </Wrapper>
  );
};
