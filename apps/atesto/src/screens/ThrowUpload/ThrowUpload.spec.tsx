import { render } from '@testing-library/react';

import {ThrowUpload} from './ThrowUpload';

describe('ThrowUpload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThrowUpload />);
    expect(baseElement).toBeTruthy();
  });
});
