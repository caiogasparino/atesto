import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EditNotesProps {}

const StyledEditNotes = styled.div`
  color: pink;
`;

export const EditNotes = (props: EditNotesProps) => {
  return (
    <StyledEditNotes>
      <h1>Welcome to EditNotes!</h1>
    </StyledEditNotes>
  );
};
