import { render } from '@testing-library/react';

import BarcodeGenerator from './BarcodeGenerator';

describe('BarcodeGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcodeGenerator />);
    expect(baseElement).toBeTruthy();
  });
});
