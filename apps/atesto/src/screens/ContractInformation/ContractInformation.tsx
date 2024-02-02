import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContractInformationProps {}

const StyledContractInformation = styled.div`
  color: pink;
`;

export function ContractInformation(props: ContractInformationProps) {
  return (
    <StyledContractInformation>
      <h1>Welcome to ContractInformation!</h1>
    </StyledContractInformation>
  );
}

export default ContractInformation;
