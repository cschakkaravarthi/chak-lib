import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { LogoBanner } from './logoBanner';
import { images } from '../assets/images';

export default {
  component: LogoBanner,
  title: 'Logo Banner'
};

export const logoBanner = (): JSX.Element => (
  <StoriesContainer>
    <LogoBanner bannerSrc={images.bannerSrc} logoSrc={images.logoSrc} />

    <hr />

    <LogoBanner bannerSrc={images.bannerSrc} logoSrc={images.logoSrc} isFetching={true} />
  </StoriesContainer>
);
