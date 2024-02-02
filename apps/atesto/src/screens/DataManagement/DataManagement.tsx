import * as React from 'react';

import { Images } from '../../assets';
import { Cards } from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { LocaleBr } from '../../locale';

import { Container, Wrapper } from './styles';

export const DataManagement = () => {
  const locale = LocaleBr;
  return (
    <Wrapper>
      <Header title={locale.dataManagement.menu} />
      <Container>
        <Cards
          title={'Gerenciar Notas'}
          text={'Adicionar notas aos contratos, e datas de entrega'}
          img={Images.home.cards.IconCardConsultation}
          path="/manage-invoice"
          manage={'invoice'}
        />
        <Cards
          title={'Gerenciar Contratos'}
          text={'Editar as informações do contrato.'}
          img={Images.home.cards.IconCardThrowAttest}
          path="/consultation"
          manage={'contract'}
        />
      </Container>
      <Footer />
    </Wrapper>
  );
};
