import { render } from '@testing-library/react';

import { AddContracts } from './AddContracts';

describe('AddContracts', () => {
  describe('AddContracts Snap', () => {
    it('renders correctly', () => {
      const { container } = render(<AddContracts />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
  it('should render successfully', () => {
    const { baseElement } = render(<AddContracts />);
    expect(baseElement).toBeTruthy();
  });
});
