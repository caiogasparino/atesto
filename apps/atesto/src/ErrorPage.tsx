import styled from 'styled-components';

import { Box } from '@mui/material';

import Header from './components/Header/Header';
import { Colors } from './styles/themes';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 4%;
  @media (max-width: 768px) {
    padding: 2%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    align-items: center;
  }
`;

export default function ErrorPage() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Box sx={styles.box}>
          <div id="error-page">
            <h1>Oops!</h1>
            <p style={styles.root}>Desculpe, ocorreu um erro inesperado.</p>
            <p>
              <i style={styles.root}>PAGINA NÃO ENCONTRADA </i>
              <span role="img" aria-label="Alert">
                🚧
              </span>
            </p>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
}

const styles = {
  root: {
    fontFamily: 'Oswald-Regular',
    color: Colors.neutral[100],
  },
  box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
