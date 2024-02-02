import * as React from 'react';

import { Images } from '../../assets';
import { Cards } from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { LocaleBr } from '../../locale';

import { Container, Wrapper } from './styles';

export const Home = () => {
  const locale = LocaleBr;
  return (
    <Wrapper>
      <Header title={locale.home.menu} />
      <Container>
        <Cards
          title={locale.home.cardsTitle.consultation}
          text={locale.home.cardsText.consultation}
          img={Images.home.cards.IconCardConsultation}
          path={'/consultation'}
        />
        <Cards
          title={locale.home.cardsTitle.throwAttest}
          text={locale.home.cardsText.throwAttest}
          img={Images.home.cards.IconCardThrowAttest}
          path={'/throw-attest'}
        />
        <Cards
          title={locale.home.cardsTitle.selectPayment}
          text={locale.home.cardsText.selectPayment}
          img={Images.home.cards.IconCardSelectPayment}
          path={'/'}
        />
        <Cards
          title={locale.home.cardsTitle.dataManagment}
          text={locale.home.cardsText.dataManagment}
          img={Images.home.cards.IconCardDataManagment}
          path={'/data-management'}
        />
        <Cards
          title={locale.home.cardsTitle.requestAttest}
          text={locale.home.cardsText.requestAttest}
          img={Images.home.cards.IconCardRequestAttest}
          path={'/home'}
        />
      </Container>
      <Footer />
    </Wrapper>
  );
};
