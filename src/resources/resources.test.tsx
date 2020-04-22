import React from 'react';

import { shallowRender } from '../services/testHelper';
import { Resources } from './resources';

describe('Resources', () => {
  it('should render correctly', () => {
    const tree = shallowRender(
      <Resources
        mainLinkText="Link Text"
        MainLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
