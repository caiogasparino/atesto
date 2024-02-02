type Items = {
  lote: string;
  quantidade: number;
  descricao: string;
  valorUnitario: number;
  total: number;
};

export type ContractDataType = {
  id?: number;
  nrContrato?: string;
  empresa?: string;
  pregao?: number;
  valorTotal?: number;
  itens?: Items[];
};
