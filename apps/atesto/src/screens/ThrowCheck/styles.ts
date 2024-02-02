import styled from 'styled-components';

import { Colors } from '../../styles/themes';

interface ScrollableContainerProps {
  height: string;
}

export const styles = {
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    width: 400,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  filter: {
    fontSize: '16px',
    fontFamily: 'Inter-Light',
    backgroundColor: Colors.neutral[100],
    height: '36px',
    width: '300px',
    marginRight: '20px',
    color: Colors.brand.default,
    '&::placeholder': {
      fontFamily: 'Inter-Light',
      fontSize: '20px',
      color: Colors.font.default,
    },
  },
  placeholder: {
    fontFamily: 'Inter-Light',
    fontSize: '16px',
    color: Colors.font.default,
  },
  selectMenu: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: '16px',
  },
  boxFooter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  boxDependency: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
  },
  boxButton: {
    marginTop: '8%',
    display: 'flex',
    justifyContent: 'flex-end',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
  },
  textArea: {
    marginTop: 10,
    padding: 10,
    width: 600,
    borderWidth: 2,
    borderColor: Colors.neutral[600],
    fontFamily: 'Inter-Bold',
    fontSize: '16px',
  },
  button: {
    height: '65px',
    width: '150px',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
    borderRadius: '10px',
    color: `${Colors.neutral[100]}`,
    backgroundColor: `${Colors.brand.default}`,
  },
  buttonHover: {
    height: '65px',
    width: '150px',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
    borderRadius: '10px',
    color: `${Colors.neutral[100]}`,
    backgroundColor: `${Colors.hover.default}`,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
  },
};

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4%;
  background-color: ${Colors.neutral[280]};
`;

export const ScrollableContainer = styled.div<ScrollableContainerProps>`
  width: 100%;
  height: ${(props) => props.height};
  overflow-y: scroll;
`;

export const Container = styled.div``;

export const Content = styled.div`
  witdh: 100%;
`;

export const Img = styled.image``;

export const Title = styled.h1`
  font-family: 'Oswald-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  text-align: flex-start;
  color: ${Colors.neutral[900]};
`;

export const Text = styled.text`
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
