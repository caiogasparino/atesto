import { render } from '@testing-library/react';

import { UploadCsv } from './UploadCsv';

describe('UploadCsv', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadCsv />);
    expect(baseElement).toBeTruthy();
  });
});
