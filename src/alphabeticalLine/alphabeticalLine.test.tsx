import React from 'react';

import { shallowRender } from '../services/testHelper';
import { AlphabeticalLine } from './alphabeticalLine';

describe('Resources', () => {
  it('should render correctly', () => {
    const tree = shallowRender(
      <AlphabeticalLine
        letter="A"
        onClick={e => console.log((e.target as HTMLInputElement).value)} />

    );
    expect(tree).toMatchSnapshot();
  });
});
