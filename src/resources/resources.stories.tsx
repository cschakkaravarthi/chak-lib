import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { Resources } from './resources';

export default {
  component: Resources,
  title: 'Resources'
};

export const resources = (): JSX.Element => (
  <StoriesContainer>
    <Resources
      mainLinkText="ReallySuperExtraLongNameForTheResource with spaces even bigger"
      MainLink={p => <a href="#">{p.children}</a>}
      extension="PPT"
      external={true}
    />
  </StoriesContainer>
);
