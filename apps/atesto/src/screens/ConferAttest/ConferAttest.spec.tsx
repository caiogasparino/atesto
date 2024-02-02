import { render } from '@testing-library/react';

import ConferAttest from './ConferAttest';

describe('ConferAttest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConferAttest />);
    expect(baseElement).toBeTruthy();
  });
});
