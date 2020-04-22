import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { MenuSlideTransition } from './menuSlide';

// @TODO: Figure out how to display transitions properly in the stories.

export default {
  component: MenuSlideTransition,
  title: 'Transitions'
};

export const menuSlideTransition = (): JSX.Element => (
  <StoriesContainer>
    <MenuSlideTransition showToggle={true}>
      <p>Some content in the menu</p>
    </MenuSlideTransition>
  </StoriesContainer>
);
