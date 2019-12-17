import React from 'react';
import { CallExpression } from './CallExpression';
import { render } from '../..';

describe('<CallExpression />', () => {
  it('renders', () => {
    const code = render(<CallExpression name="hello" />, { prettier: false });
    expect(code).toBe('hello()');
  });
});
