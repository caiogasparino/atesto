export type ThrowCheckMockProps = {
  id?: number;
  description?: string;
};

export type IlistData = {
  data?: ThrowCheckMockProps[];
};

export const GetCheckFirst: IlistData = {
  data: [
    { id: 1, description: 'Número da nota' },
    { id: 2, description: 'Valor da nota' },
    { id: 3, description: 'Itens' },
    { id: 4, description: 'Quantidades dos itens' },
    { id: 5, description: 'Endereço da entrega' },
  ],
};

export const GetCheckSecond: IlistData = {
  data: [
    { id: 6, description: 'Assinatura do representante da unidade' },
    { id: 7, description: 'Carimbo da instituição' },
    { id: 8, description: 'Data de recebimento' },
  ],
};

export const GetCheckThree: IlistData = {
  data: [
    { id: 9, description: 'Sim' },
    { id: 10, description: 'Não' },
  ],
};

export const mockSelectFilterDependency = [
  {
    value: 1,
    label: 'Option 1',
  },
  {
    value: 2,
    label: 'Option 2',
  },
  {
    value: 3,
    label: 'Option 3',
  },
  {
    value: 4,
    label: 'Option 4',
  },
];
