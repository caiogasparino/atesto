import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ManageContractsProps {}

const StyledManageContracts = styled.div`
  color: pink;
`;

export function ManageContracts(props: ManageContractsProps) {
  return (
    <StyledManageContracts>
      <h1>Welcome to ManageContracts!</h1>
    </StyledManageContracts>
  );
}

export default ManageContracts;
