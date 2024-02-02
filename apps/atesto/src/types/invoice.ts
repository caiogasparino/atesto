export type InvoiceDataType = {
  id?: number;
  nrNota?: string;
  serie?: string;
  codigo?: string;
  status?: string;
  razaoSocial?: string;
  cnpj?: string;
  dataEmissao?: string;
  endereco?: string;
  valorNota?: number;
  contrato?: string;
  produto?: ProductType[];
};

type ProductType = {
  lote: number;
  quantidade: number;
  descricao: string;
  valorUnitario: number;
  total: number;
};
