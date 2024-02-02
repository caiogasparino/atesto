import { Form } from 'formik';
import styled from 'styled-components';

import { Colors } from '../../styles/themes';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  color: ${Colors.neutral[200]};
  font-family: Oswald-Regular;

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: bold;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;

      &:focus {
        outline: none;
        border-color: blue;
        box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.25);
      }
    }

    select {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;

      &:focus {
        outline: none;
        border-color: blue;
        box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.25);
      }
    }

    div {
      color: red;
      font-size: 0.75rem;
    }
  }

  button {
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: ${Colors.neutral[280]};
    color: ${Colors.brand.default};
    font-weight: bold;

    &:hover {
      cursor: pointer;
      background-color: ${Colors.neutral[300]};
    }
  }
`;
