import { render } from '@testing-library/react';

import ThrowAttest from './ThrowAttest';

describe('ThrowAttest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThrowAttest />);
    expect(baseElement).toBeTruthy();
  });
});
