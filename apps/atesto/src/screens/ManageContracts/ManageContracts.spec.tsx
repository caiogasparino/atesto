import { render } from '@testing-library/react';

import ManageContracts from './ManageContracts';

describe('ManageContracts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManageContracts />);
    expect(baseElement).toBeTruthy();
  });
});
