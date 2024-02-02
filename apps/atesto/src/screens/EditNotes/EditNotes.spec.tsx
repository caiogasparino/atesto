import { render } from '@testing-library/react';

import EditNotes from './EditNotes';

describe('EditNotes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditNotes />);
    expect(baseElement).toBeTruthy();
  });
});
