import styled from 'styled-components';

import { Colors, Size } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  witdh: 100%;
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

export const TextCheckBox = styled.text`
  font-family: 'Oswald-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  text-align: center;
  text-decoration: underline;
  color: ${Colors.neutral[900]};
`;

export const TextResult = styled.text`
  margin-left: 1%;
  font-family: 'Oswald-Light';
  font-style: normal;
  font-weight: 500;
  font-size: 1.3em;
  text-align: center;
  color: ${Colors.neutral[600]};
`;

export const styles = {
  imageAttest: {
    width: '20%',
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
  boxImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.neutral[300],
    borderRadius: 2,
    marginTop: 8,
    padding: 4,
  },
  boxTitle: {
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'space-between',
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
    marginTop: 8,
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
