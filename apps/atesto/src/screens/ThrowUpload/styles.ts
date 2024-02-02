import styled from 'styled-components';

import { Colors, Size } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxAttest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${Colors.neutral[280]};
  padding-bottom: 20%;
`;

export const Img = styled.image``;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const styles = {
  imageAttest: {
    width: '60%',
    padding: 4,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  boxButton: {
    width: '100%',

    display: 'flex',
    justifyContent: 'flex-end',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
  },
  boxTitle: {
    padding: 4,
    width: '75%',
  },
  input: {
    width: 400,
  },
  button: {
    gap: 2,
    marginRight: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '65px',
    width: '280px',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
    borderRadius: '10px',
    color: Colors.neutral[100],
    backgroundColor: Colors.brand.default,
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: Colors.hover.default,
      cursor: 'pointer',
    },
    '@media screen and (max-width: 700px)': {
      marginBottom: 2,
      width: '90%',
      fontSize: '18px',
    },
  },
  typography: {
    title: {
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      fontSize: Size.fonts.heading,
      color: Colors.brand.default,
    },
  },
  footerbutton: {
    marginTop: 2,
    display: 'flex',
    flexDirection: 'row',

    '@media screen and (max-width: 700px)': {
      width: '80%',
      fontSize: '18px',
      display: 'grid',
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
};
