import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { environment } from '../environments/environment';
import { setStoreInvoiceId } from '../store/invoiceIdSlice';
import { setStoreInvoice } from '../store/invoiceSlice';
import { closeModal } from '../store/modalSlice';
import { nextStep, setCurrentStep } from '../store/stepSlice';
import { InconcistencyType } from '../types/inconsistencySelect';
const { url, bearer } = environment;

export const useGetInvoice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invoiceId, setResultId] = useState();
  const [invoice, setResult] = useState();
  const [filterInconcistency, setFilterInconsistency] = useState<
    InconcistencyType[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getInvoice = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/NotasFiscais`, {
        headers: { 'Content-Type': 'application/json', Authorization: bearer },
      });
      const data = await response.json();
      if (response.status === 200) {
        setResult(data);
        dispatch(setStoreInvoice(data));
        dispatch(nextStep());
        setTimeout(() => {
          dispatch(closeModal());
          setLoading(false);
        }, 5000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const getInvoiceId = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/NotaFiscal/${id}`, {
        headers: { 'Content-Type': 'application/json', Authorization: bearer },
      });
      const data = await response.json();
      if (response.status === 200) {
        setResultId(data);
        dispatch(setStoreInvoiceId(data));
        setTimeout(() => {
          dispatch(closeModal());
          navigate('/throw-check');
          setLoading(false);
        }, 3000);
        setTimeout(() => {
          dispatch(setCurrentStep(1));
        }, 5000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const putAttestId = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/GerarAtesto`, {
        headers: { 'Content-Type': 'application/json', Authorization: bearer },
      });
      const data = await response.json();
      if (response.status === 200) {
        setResultId(data);
        dispatch(setStoreInvoiceId(data));
        dispatch(nextStep());
        setTimeout(() => {
          dispatch(closeModal());
          setLoading(false);
        }, 3000);
        setTimeout(() => {
          dispatch(setCurrentStep(1));
        }, 5000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const getInconsitency = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/ReceberTiposDeInconsistencia`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: bearer,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setFilterInconsistency(data);

        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return {
    invoiceId,
    invoice,
    filterInconcistency,
    loading,
    error,
    getInvoice,
    getInvoiceId,
    getInconsitency,
    putAttestId,
  };
};
