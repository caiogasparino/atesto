import { render } from '@testing-library/react';

import { AddInvoice } from './AddInvoice';

describe('AddInvoice', () => {
  describe('AddInvoice Snap', () => {
    it('renders correctly', () => {
      const { container } = render(<AddInvoice />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
  it('should render successfully', () => {
    const { baseElement } = render(<AddInvoice />);
    expect(baseElement).toBeTruthy();
  });
});
