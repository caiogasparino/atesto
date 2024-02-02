import { render } from '@testing-library/react';

import AttestRequest from './AttestRequest';

describe('AttestRequest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AttestRequest />);
    expect(baseElement).toBeTruthy();
  });
});
