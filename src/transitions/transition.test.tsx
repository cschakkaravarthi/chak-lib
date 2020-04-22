import React from 'react';

import { shallowRender } from '../services/testHelper';
import { MenuSlideTransition } from './menuSlide';

describe('MenuSlideTransition', () => {
  it('should render correctly', () => {
    const tree = shallowRender(
      <MenuSlideTransition showToggle={true}>
        <p>Some content in the menu</p>
      </MenuSlideTransition>
    );
    expect(tree).toMatchSnapshot();
  });
});
