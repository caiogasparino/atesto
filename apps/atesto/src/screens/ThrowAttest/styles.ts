import styled from 'styled-components';

import { Colors, Size } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxAttest = styled.div`
  padding: 4%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${Colors.neutral[280]};
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
  boxTitle: {
    width: '75%',
  },
  input: {
    width: 400,
  },
  buttom: {
    height: '60px',
    width: '300px',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
    borderRadius: '10px',
    color: Colors.neutral[100],
    backgroundColor: Colors.brand.default,
    marginRight: 10,
    marginLeft: 10,
  },
  typography: {
    title: {
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
      fontSize: Size.fonts.heading,
      color: Colors.brand.default,
    },
  },
};
