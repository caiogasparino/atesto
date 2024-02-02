import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { CircularProgress } from '@mui/material';

import Header from '../../components/Header/Header';
import { usePostInvoice } from '../../hooks/usePostInvoice';

import { StyledForm } from './styles';

interface FormData {
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

const initialValues: FormData = {
  numNFV: '',
  serie: '',
  codigo: '',
  dataEmissao: new Date(),
  valorNota: 0,
  status: 0,
  contratoId: 0,
  fornecedorId: 0,
  workplaceId: 0,
};

const validationSchema = Yup.object({
  numNFV: Yup.string().required('Este campo é obrigatório'),
  serie: Yup.string().required('Este campo é obrigatório'),
  codigo: Yup.string().required('Este campo é obrigatório'),
  valorNota: Yup.number().min(0, 'O valor da nota não pode ser negativo'),
  status: Yup.number().oneOf([0, 1, 2], 'O status deve ser 0, 1 ou 2'),
  contratoId: Yup.number().required('Este campo é obrigatório'),
  fornecedorId: Yup.number().required('Este campo é obrigatório'),
  workplaceId: Yup.number().required('Este campo é obrigatório'),
});

export const AddInvoice = () => {
  const { loading, postContract } = usePostInvoice();

  const onSubmit = async (values: FormData) => {
    const data = await postContract(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div>
          <Header title="ADICIONAR CONTRATOS" />
          <StyledForm>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="numNFV">Número NFV</label>
                <input
                  type="text"
                  id="numNFV"
                  {...formik.getFieldProps('numNFV')}
                />
                {formik.touched.numNFV && formik.errors.numNFV && (
                  <div>{formik.errors.numNFV}</div>
                )}
              </div>

              <div>
                <label htmlFor="serie">Série</label>
                <input
                  type="text"
                  id="serie"
                  {...formik.getFieldProps('serie')}
                />
                {formik.touched.serie && formik.errors.serie && (
                  <div>{formik.errors.serie}</div>
                )}
              </div>

              <div>
                <label htmlFor="codigo">Código</label>
                <input
                  type="text"
                  id="codigo"
                  {...formik.getFieldProps('codigo')}
                />
                {formik.touched.codigo && formik.errors.codigo && (
                  <div>{`${formik.errors.codigo}`}</div>
                )}
              </div>

              <div>
                <label htmlFor="dataEmissao">Data de Emissão</label>
                <input
                  type="datetime-local"
                  lang="pr-Br"
                  id="dataEmissao"
                  {...formik.getFieldProps('dataEmissao')}
                />
                {formik.touched.dataEmissao && formik.errors.dataEmissao && (
                  <div>{`${formik.errors.dataEmissao}`}</div>
                )}
              </div>

              <div>
                <label htmlFor="valorNota">Valor da Nota</label>
                <input
                  type="number"
                  id="valorNota"
                  {...formik.getFieldProps('valorNota')}
                />
                {formik.touched.valorNota && formik.errors.valorNota && (
                  <div>{formik.errors.valorNota}</div>
                )}
              </div>

              <div>
                <label htmlFor="status">Status</label>
                <select id="status" {...formik.getFieldProps('status')}>
                  <option value={0}>Pendente</option>
                  <option value={1}>Pago</option>
                  <option value={2}>Cancelado</option>
                </select>
                {formik.touched.status && formik.errors.status && (
                  <div>{formik.errors.status}</div>
                )}
              </div>

              <div>
                <label htmlFor="contratoId">ID do Contrato</label>
                <input
                  type="number"
                  id="contratoId"
                  {...formik.getFieldProps('contratoId')}
                />
                {formik.touched.contratoId && formik.errors.contratoId && (
                  <div>{formik.errors.contratoId}</div>
                )}
              </div>

              <div>
                <label htmlFor="fornecedorId">ID do Fornecedor</label>
                <input
                  type="number"
                  id="fornecedorId"
                  {...formik.getFieldProps('fornecedorId')}
                />
                {formik.touched.fornecedorId && formik.errors.fornecedorId && (
                  <div>{formik.errors.fornecedorId}</div>
                )}
              </div>

              <div>
                <label htmlFor="workplaceId">ID do Local de Trabalho</label>
                <input
                  type="number"
                  id="workplaceId"
                  {...formik.getFieldProps('workplaceId')}
                />
                {formik.touched.workplaceId && formik.errors.workplaceId && (
                  <div>{formik.errors.workplaceId}</div>
                )}
              </div>
            </form>
            <button type="submit" disabled={loading}>
              {loading ? <CircularProgress /> : 'ENVIAR'}
            </button>
          </StyledForm>
        </div>
      )}
    </Formik>
  );
};

//Este formulário usa o pacote `formik` para gerenciar o estado do formulário e as validações de entrada. Ele usa o pacote `Yup` para definir o esquema de validação do formulário.

//Cada campo no formulário é um componente `<input>` ou `<select>`. Os valores dos campos são armazenados em um objeto `FormData`. Quando o usuário envia o formulário, a função `onSubmit` é chamada com os valores do formulário.

//A função `getFieldProps` do `formik` é usada para fornecer as propriedades `id`, `name`, `value`, `onChange` e `onBlur` para cada campo do formulário. Isso permite que o `formik` gerencie o estado do formulário e as validações de entrada. As mensagens de erro são exibidas abaixo de cada campo se ele for tocado e inválido.
