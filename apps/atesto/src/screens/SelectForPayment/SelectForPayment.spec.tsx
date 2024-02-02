import { render } from '@testing-library/react';

import SelectForPayment from './SelectForPayment';

describe('SelectForPayment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectForPayment />);
    expect(baseElement).toBeTruthy();
  });
});
