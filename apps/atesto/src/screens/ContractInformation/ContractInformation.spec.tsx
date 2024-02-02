import { render } from '@testing-library/react';

import ContractInformation from './ContractInformation';

describe('ContractInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContractInformation />);
    expect(baseElement).toBeTruthy();
  });
});
