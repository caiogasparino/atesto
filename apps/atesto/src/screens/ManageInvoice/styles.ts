import styled from 'styled-components';

import { Colors } from '../../styles/themes';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 4%;
  @media (max-width: 768px) {
    padding: 2%;
  }
`;

export const Container = styled.div`
  display: grid;

  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
    align-items: center;
  }
`;

export const styles = {
  accordion: {
    display: 'grid',
    padding: 0,
    backgroundColor: Colors.neutral[100],
  },

  add: {
    marginRight: 2,
    color: Colors.neutral[500],
  },
  expandIcon: {
    color: Colors.neutral[500],
  },
};
