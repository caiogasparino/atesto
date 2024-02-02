import { useState } from 'react';

import { environment } from '../environments/environment.prod';

export const usePostContract = () => {
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [supplier, setResultSupplier] = useState<Supplier[]>([]);
  const [error, setError] = useState<unknown>('');

  interface PostContractParams {
    fornecedorId: number;
    nrContrato: string;
    pregao: string;
    valorContrato: number;
    gestorContratoId: number;
    fiscalContratoId: number;
    itens: {
      descItem: string;
      quantidade: number;
      valorUnitario: number;
      valorTotal: number;
      lote: string;
    }[];
  }

  interface Supplier {
    id: number;
    cnpj: string;
    razaoSocial: string;
    telefone: string;
  }

  const postContract = async (contractData: PostContractParams) => {
    setLoading(true);
    try {
      const response = await fetch(`${environment.url}/Contrato/Inserir`, {
        method: 'GET',
        body: JSON.stringify(contractData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setLoading(false);
      if (data.status === 200) {
        setSucess(true);
      }
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const getSupplier = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${environment.url}/Fornecedor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setResultSupplier(data);
      setLoading(false);
      if (data.status === 200) {
        setSucess(true);
      }
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { loading, error, sucess, supplier, postContract, getSupplier };
};
