import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AttestRequestProps {}

const StyledAttestRequest = styled.div`
  color: pink;
`;

export function AttestRequest(props: AttestRequestProps) {
  return (
    <StyledAttestRequest>
      <h1>Welcome to AttestRequest!</h1>
    </StyledAttestRequest>
  );
}

export default AttestRequest;
