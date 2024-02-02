import { useEffect, useState } from 'react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import Header from '../../components/Header/Header';
import TableContract from '../../components/Table/TableContract';
import TableInvoice from '../../components/Table/TableInvoice';
import { useGetContract } from '../../hooks/useGetContract';
import { useGetInvoice } from '../../hooks/useGetInvoice';
import { LocaleBr } from '../../locale';

import {
  BoxConsultation,
  Button,
  Container,
  styles,
  Toolbar,
  Wrapper,
} from './styles';
export interface NotesOrContractsProps {
  children?: React.ReactNode;
}

export const NotesOrContracts = (props: NotesOrContractsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loading: loadingInvoice, invoice, getInvoice } = useGetInvoice();
  const { loading: loadContract, contract, getContract } = useGetContract();
  const [notes, setNotes] = useState(true);
  const [contracts, setContracts] = useState(false);
  const { consultation } = LocaleBr;

  useEffect(() => {
    notes && getInvoice();
    contracts && getContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contracts, notes]);

  const handleClickNotes = () => {
    setNotes(true);
    setContracts(false);
  };
  const handleClickContracts = () => {
    setNotes(false);
    setContracts(true);
  };
  //ADD INVOICE
  const handleClickAddInvoice = () => {
    navigate('/add-invoice');
  };
  //ADD CONTRACT
  const handleClickAddContracts = () => {
    navigate('/add-contracts');
  };

  const tableNotesOrContract = notes ? true : false;
  const isInvoices = location.state.type === 'invoice';
  const isContract = location.state.type === 'contract';

  return (
    <Wrapper>
      <Container>
        <Header title={consultation.menu} />
        <BoxConsultation>
          <Toolbar>
            {isInvoices || isContract ? null : (
              <Box sx={styles.selectContainerButton}>
                <Button onClick={() => handleClickNotes()}>
                  {consultation.buttonNotes}
                </Button>
                <Button onClick={() => handleClickContracts()}>
                  {consultation.buttonContract}
                </Button>
              </Box>
            )}
            <Box sx={styles.selectContainerButton}>
              {isInvoices && (
                <Button onClick={() => handleClickAddInvoice()}>
                  {consultation.buttonAddInvoice}
                </Button>
              )}
              {isContract && (
                <Button onClick={() => handleClickAddContracts()}>
                  {consultation.buttonAddContract}
                </Button>
              )}
            </Box>
          </Toolbar>
          {tableNotesOrContract && (
            <TableInvoice invoiceData={invoice} loading={loadingInvoice} />
          )}

          {!tableNotesOrContract && (
            <TableContract contractData={contract} loading={loadContract} />
          )}
        </BoxConsultation>
      </Container>
    </Wrapper>
  );
};
