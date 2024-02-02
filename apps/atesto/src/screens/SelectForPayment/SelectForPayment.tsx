import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SelectForPaymentProps {}

const StyledSelectForPayment = styled.div`
  color: pink;
`;

export function SelectForPayment(props: SelectForPaymentProps) {
  return (
    <StyledSelectForPayment>
      <h1>Welcome to SelectForPayment!</h1>
    </StyledSelectForPayment>
  );
}

export default SelectForPayment;
