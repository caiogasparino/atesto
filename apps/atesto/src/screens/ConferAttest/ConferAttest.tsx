import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ConferAttestProps {}

const StyledConferAttest = styled.div`
  color: pink;
`;

export function ConferAttest(props: ConferAttestProps) {
  return (
    <StyledConferAttest>
      <h1>Welcome to ConferAttest!</h1>
    </StyledConferAttest>
  );
}

export default ConferAttest;
