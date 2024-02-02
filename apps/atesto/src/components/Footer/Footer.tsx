import styled from 'styled-components';

import { CardMedia } from '@mui/material';

import { Images } from '../../assets';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  padding: 0 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    gap: 4rem;
    align-items: center;
  }
`;

const styles = {
  cardMedia: {
    margin: 'auto',
    width: '160px',
  },
};

export function Footer() {
  const LogoSeed = Images.logos.LogoSeed;
  const LogoGovPr = '../../assets/images/logos/logo_govpr.svg';
  return (
    <Wrapper>
      <Container>
        <CardMedia sx={styles.cardMedia} component="img" image={LogoGovPr} />
        <CardMedia sx={styles.cardMedia} component="img" image={LogoSeed} />
      </Container>
    </Wrapper>
  );
}

export default Footer;
