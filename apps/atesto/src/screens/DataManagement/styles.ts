import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 4%;
  @media (max-width: 768px) {
    padding: 2%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    align-items: center;
  }
`;
