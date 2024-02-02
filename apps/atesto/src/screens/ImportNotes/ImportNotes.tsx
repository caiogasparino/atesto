import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImportNotesProps {}

const StyledImportNotes = styled.div`
  color: pink;
`;

export function ImportNotes(props: ImportNotesProps) {
  return (
    <StyledImportNotes>
      <h1>Welcome to ImportNotes!</h1>
    </StyledImportNotes>
  );
}

export default ImportNotes;
