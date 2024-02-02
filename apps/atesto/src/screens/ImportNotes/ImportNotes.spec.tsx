import { render } from '@testing-library/react';

import ImportNotes from './ImportNotes';

describe('ImportNotes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportNotes />);
    expect(baseElement).toBeTruthy();
  });
});
