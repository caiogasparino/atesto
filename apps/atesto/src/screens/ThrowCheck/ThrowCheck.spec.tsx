import { render } from '@testing-library/react';

import { ThrowCheck } from './ThrowCheck';

describe('ThrowCheck', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThrowCheck />);
    expect(baseElement).toBeTruthy();
  });
});
