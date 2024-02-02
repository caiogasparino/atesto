// import { useEffect } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

import { Button, CircularProgress } from '@mui/material';

import Header from '../../components/Header/Header';
import { usePostContract } from '../../hooks/usePostContract';

import { StyledForm } from './styles';

interface FormValues {
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

const initialValues: FormValues = {
  fornecedorId: 0,
  nrContrato: '',
  pregao: '',
  valorContrato: 0,
  gestorContratoId: 1,
  fiscalContratoId: 1,
  itens: [
    {
      descItem: '',
      quantidade: 0,
      valorUnitario: 0,
      valorTotal: 0,
      lote: '',
    },
  ],
};

const validationSchema = Yup.object({
  fornecedorId: Yup.number().required(
    'O campo "ID do fornecedor" é obrigatório'
  ),
  nrContrato: Yup.string().required(
    'O campo "Número do contrato" é obrigatório'
  ),
  pregao: Yup.string().required('O campo "Pregão" é obrigatório'),
  valorContrato: Yup.number().required(
    'O campo "Valor do contrato" é obrigatório'
  ),
  gestorContratoId: Yup.number().required(
    'O campo "ID do gestor do contrato" é obrigatório'
  ),
  fiscalContratoId: Yup.number().required(
    'O campo "ID do fiscal do contrato" é obrigatório'
  ),
  itens: Yup.array().of(
    Yup.object().shape({
      descItem: Yup.string().required(
        'O campo "Descrição do item" é obrigatório'
      ),
      quantidade: Yup.number().required('O campo "Quantidade" é obrigatório'),
      valorUnitario: Yup.number().required(
        'O campo "Valor unitário" é obrigatório'
      ),
      valorTotal: Yup.number().required('O campo "Valor total" é obrigatório'),
      lote: Yup.string().required('O campo "Lote" é obrigatório'),
    })
  ),
});

const supplier = [
  {
    id: 1,
    cnpj: '81243735000148',
    razaoSocial: 'Teste de Update dddddddwwwwWWWWWWWWWddddd',
    telefone: '4133337886',
  },
  {
    id: 8,
    cnpj: '33050071000158',
    razaoSocial: 'Razão Social - Insert via API',
    telefone: '4133333333',
  },
  {
    id: 16,
    cnpj: '33050196000188',
    razaoSocial: 'Razão Social - Insert via API',
    telefone: '4133333333',
  },
  {
    id: 21,
    cnpj: '06981180000116',
    razaoSocial: 'Teste de Update dddddddddddd',
    telefone: '4133337886',
  },
  {
    id: 28,
    cnpj: '29978814000187',
    razaoSocial: 'teste 04/02/2023',
    telefone: '4144444444',
  },
  {
    id: 29,
    cnpj: '58119199000151',
    razaoSocial: 'string',
    telefone: '4133333333',
  },
  {
    id: 31,
    cnpj: '20258278000170',
    razaoSocial: 'string',
    telefone: '4133333333',
  },
  {
    id: 32,
    cnpj: '44380196000162',
    razaoSocial: 'string',
    telefone: '0099882233',
  },
  {
    id: 34,
    cnpj: '00000000000000',
    razaoSocial: 'Posi',
    telefone: '4199999999',
  },
];

export const AddContracts = () => {
  const { loading, postContract } = usePostContract();

  const handleSubmit = (values: FormValues) => {
    const data = postContract(values);
    return data;
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <div>
          <Header title="ADICIONAR CONTRATOS" />
          <StyledForm>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="fornecedorId">ID do fornecedor</label>
                <select id="status" {...formik.getFieldProps('fornecedorId')}>
                  {supplier.map((itens, index) => (
                    <option value={index}>{itens.razaoSocial}</option>
                  ))}
                </select>
                {formik.touched.fornecedorId && formik.errors.fornecedorId && (
                  <div>{formik.errors.fornecedorId}</div>
                )}
              </div>

              <div>
                <label htmlFor="nrContrato">Número do contrato</label>
                <Field type="text" id="nrContrato" name="nrContrato" />
                {formik.touched.nrContrato && formik.errors.nrContrato && (
                  <div>{formik.errors.nrContrato}</div>
                )}
              </div>

              <div>
                <label htmlFor="pregao">Pregão</label>
                <Field type="text" id="pregao" name="pregao" />
                {formik.touched.pregao && formik.errors.pregao && (
                  <div>{formik.errors.pregao}</div>
                )}
              </div>
              <div>
                <label htmlFor="valorContrato">Valor do contrato</label>
                <Field type="number" id="valorContrato" name="valorContrato" />
                {formik.touched.valorContrato &&
                  formik.errors.valorContrato && (
                    <div>{formik.errors.valorContrato}</div>
                  )}
              </div>

              <div>
                <label htmlFor="gestorContratoId">
                  ID do gestor do contrato
                </label>
                <Field
                  type="number"
                  id="gestorContratoId"
                  name="gestorContratoId"
                />
                {formik.touched.gestorContratoId &&
                  formik.errors.gestorContratoId && (
                    <div>{formik.errors.gestorContratoId}</div>
                  )}
              </div>

              <div>
                <label htmlFor="fiscalContratoId">
                  ID do fiscal do contrato
                </label>
                <Field
                  type="number"
                  id="fiscalContratoId"
                  name="fiscalContratoId"
                />
                {formik.touched.fiscalContratoId &&
                  formik.errors.fiscalContratoId && (
                    <div>{formik.errors.fiscalContratoId}</div>
                  )}
              </div>

              <div>
                <label htmlFor="itens[0].descItem">Descrição do item</label>
                <Field
                  type="text"
                  id="itens[0].descItem"
                  name="itens[0].descItem"
                />
              </div>

              <div>
                <label htmlFor="itens[0].quantidade">Quantidade</label>
                <Field
                  type="number"
                  id="itens[0].quantidade"
                  name="itens[0].quantidade"
                />
              </div>

              <div>
                <label htmlFor="itens[0].valorUnitario">Valor unitário</label>
                <Field
                  type="number"
                  id="itens[0].valorUnitario"
                  name="itens[0].valorUnitario"
                />
              </div>

              <div>
                <label htmlFor="itens[0].valorTotal">Valor total</label>
                <Field
                  type="number"
                  id="itens[0].valorTotal"
                  name="itens[0].valorTotal"
                />
              </div>

              <div>
                <label htmlFor="itens[0].lote">Lote</label>
                <Field type="text" id="itens[0].lote" name="itens[0].lote" />
              </div>
            </form>
            <button type="submit" disabled={!loading}>
              {loading ? <CircularProgress /> : 'ENVIAR'}
            </button>
          </StyledForm>
        </div>
      )}
    </Formik>
  );
};
