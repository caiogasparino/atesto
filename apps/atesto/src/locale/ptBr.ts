const LocaleBr = {
  home: {
    menu: 'MENU PRINCIPAL',
    cardsTitle: {
      consultation: 'Consulta',
      throwAttest: 'Lançar Atesto de Nota Fiscal',
      selectPayment: 'Seleção para Pagamento',
      dataManagment: 'Gestão de Dados',
      requestAttest: 'Solicitação de Atesto',
    },
    cardsText: {
      consultation: 'Pesquise sobre notas fiscais e contratos.',
      throwAttest:
        'Escanear nota fiscal, confirmação dos dados da nota, tirar foto do produto.',
      selectPayment: 'Selecionar contrato ou nota para pagamento.',
      dataManagment:
        'Adicionar notas aos contratos e datas de entrega. Adicionar contratos e editá-las.',
      requestAttest: 'Selecionar contratos ou notas para atestá-las.',
    },
  },
  dataManagement: {
    menu: 'GESTÃO DE DADOS',
    cardsTitle: {
      consultation: 'Consulta',
      throwAttest: 'Lançar Atesto de Nota Fiscal',
    },
    cardsText: {
      consultation: 'Pesquise sobre notas fiscais e contratos.',
      throwAttestEdit: 'Editar as informações do contrato.',
    },
  },
  throwAttest: {
    menu: 'LANÇAR ATESTO DE NOTA FISCAL',
    textButtonBar: 'Clique para digitar o código',
    textButtonScanner: 'Clique para scanear o código',
    title:
      'Realiza a leitura do código de barras da nota fiscal. \nCaso não seja possível, acesse o botão Clique para digitar o código',
    modalTitle: 'Digite o código de barras:',
    modalTitleScanner: 'Posicione para scannear:',
    confirm: 'Confirmar',
    concluded: 'Concluir',
  },
  throwCheck: {
    titleCorrectData: 'Confirme se os dados abaixo estão corretos:',
    titleCheckInformation: 'Confira se a nota contém as seguintes informações:',
    titleInconsistency: 'Existe alguma inconsistência na nota?',
    typeDependency: 'Tipo de pendência',
    confirm: 'Seu atesto foi enviado!',
    lblCheck: {
      numberNote: 'Número da nota',
      valueNote: 'Valor da nota',
      items: 'Itens',
      countItems: 'Quantidades dos itens',
      addressDelivery: 'Endereço da entrega',
      representativeSignature: 'Assinatura do representante da unidade',
      institutionStamp: 'Carimbo da instituição',
      receivingDate: 'Data de recebimento',
      inconsistencyOn: 'Sim',
      inconsistencyOff: 'Não',
    },
  },
  throwUpload: {
    titleInvoice: 'TIRAR FOTO DA NOTA FISCAL',
    titleItems:
      'Capture uma foto horizontal, em modo paisagem, das caixas com os equipamentos que constam na nota fiscal.',
    photo: 'Tirar Foto',
    uploadImageInvoice: 'Carregar Nota',
    uploadImageItems: 'Carregar Items',
    uploadInvoiceIsTrue:
      'Você confirma que as informações na foto estão visíveis ?',
    uploadItemsIsTrue:
      'Você confirma que todos os itens estão visíveis na foto ?',
  },
  uploadCsv: {
    buttonLoadCsv: 'Carregar Csv',
    buttonSendCsv: 'Enviar Dados',
    titleSale: 'Notas de Venda',
    titleShipping: 'Notas de Remessa',
    titleUploadInvoice: 'IMPORTAR NOTAS FISCAIS',
    alertlabel: 'Por favor, selecione um arquivo em formato CSV.',
    label:
      'Arraste os arquivos em formato (.CSV) até aqui para fazer o upload ',
  },
  consultation: {
    menu: 'CONSULTA',
    selectPlaceholder: 'Filtro',
    buttonContract: 'Contratos',
    buttonAddContract: 'Adicionar Contratos',
    buttonNotes: 'Notas',
    buttonAddInvoice: 'Adicionar Notas',
    labelSearch: 'Search',
  },
  component: {
    modal: {
      btnConfirm: 'Confirmar',
      btnCancel: 'Cancelar',
    },
  },
};

export default LocaleBr;
