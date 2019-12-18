import React from 'react';
import { ClassProperty } from './ClassProperty';
import { render } from '../..';

describe('<ClassProperty />', () => {
  it('renders', () => {
    const code = render(<ClassProperty name="hello">world</ClassProperty>, {
      parserOptions: { plugins: ['classProperties'] },
      prettier: false
    });
    expect(code).toBe("hello = 'world';");
  });
});

describe('<ClassProperty static />', () => {
  it('renders', () => {
    const code = render(
      <ClassProperty static name="hello">
        world
      </ClassProperty>,
      {
        parserOptions: { plugins: ['classProperties'] },
        prettier: false
      }
    );
    expect(code).toBe("static hello = 'world';");
  });
});

describe('<ClassProperty type />', () => {
  it('renders', () => {
    const code = render(
      <ClassProperty name="hello" type="string">
        world
      </ClassProperty>,
      {
        parserOptions: { plugins: ['classProperties', 'typescript'] },
        prettier: false
      }
    );
    expect(code).toBe("hello: string = 'world';");
  });
});
