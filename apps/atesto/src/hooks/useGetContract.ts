import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { environment } from '../environments/environment';
import {
  getContractData,
  setStoreContract,
  setStoreContractId,
} from '../store/contractSlice';
import { closeModal } from '../store/modalSlice';
import { nextStep } from '../store/stepSlice';
const { url, bearer } = environment;

export const useGetContract = () => {
  const contractData = useSelector(getContractData);
  const dispatch = useDispatch();
  const [contractId, setResultId] = useState();
  const [contract, setResult] = useState(contractData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getContract = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/Contratos`, {
        headers: { 'Content-Type': 'application/json', Authorization: bearer },
      });
      const data = await response.json();
      if (response.status === 200) {
        setResult(data);
        dispatch(setStoreContract(data));
        dispatch(nextStep());
        dispatch(closeModal());
        setTimeout(() => {
          setLoading(false);
        }, 3000);
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

  const getContractId = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/Contrato/Get/${id}`, {
        headers: { 'Content-Type': 'application/json', Authorization: bearer },
      });
      const data = await response.json();
      if (response.status === 200) {
        setResultId(data);
        dispatch(setStoreContractId(data));
        dispatch(nextStep());
        dispatch(closeModal());
        setTimeout(() => {
          setLoading(false);
        }, 3000);
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

  return {
    contractId,
    contract,
    loading,
    error,
    getContract,
    getContractId,
  };
};
