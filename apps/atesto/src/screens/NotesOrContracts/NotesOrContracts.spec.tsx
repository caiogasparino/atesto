import { render } from '@testing-library/react';

import NotesOrContracts from './NotesOrContracts';

describe('NotesConsultation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotesOrContracts />);
    expect(baseElement).toBeTruthy();
  });
});
