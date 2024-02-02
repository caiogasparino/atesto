import { useState } from 'react';

import { environment } from '../environments/environment.prod';

export const usePostInvoice = () => {
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState<unknown>('');

  interface PostInvoiceParams {
    numNFV: string;
    serie: string;
    codigo: string;
    dataEmissao: Date;
    valorNota: number;
    status: number;
    contratoId: number;
    fornecedorId: number;
    workplaceId: number;
  }

  const postContract = async (contractData: PostInvoiceParams) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${environment.url}/NotaFiscalVenda/Inserir`,
        {
          method: 'POST',
          body: JSON.stringify(contractData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
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

  return { loading, error, sucess, postContract };
};
