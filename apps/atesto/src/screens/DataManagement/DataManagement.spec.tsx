import { render } from '@testing-library/react';

import DataManagement from './DataManagement';

describe('DataManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataManagement />);
    expect(baseElement).toBeTruthy();
  });
});
