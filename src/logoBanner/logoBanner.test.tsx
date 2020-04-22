import React from 'react';

import { shallowRender } from '../services/testHelper';
import { LogoBanner } from './logoBanner';
import { images } from '../assets/images';

describe('LogoBanner', () => {
  it('should render correctly', () => {
    const tree = shallowRender(
      <LogoBanner
        bannerSrc={images.bannerSrc}
        logoSrc={images.logoSrc}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
