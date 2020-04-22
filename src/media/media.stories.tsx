import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { Media } from './media';

export default {
  component: Media,
  title: 'Media'
};

export const mediaPrimary = (): JSX.Element => (
  <StoriesContainer>
    <Media
      variant="primary"
      title="Media title primary"
      sectionImageSrc="https://picsum.photos/id/522/200/200"
      bodyText="Some text to see how the primary body text looks"
    />

    <hr />

    <Media
      isFetching={true}
      variant="primary"
      title="Media title primary"
      sectionImageSrc="https://picsum.photos/id/522/200/200"
      bodyText="Some text to see how the primary body text looks"
    />
  </StoriesContainer>
);

export const mediaSecondary = (): JSX.Element => (
  <StoriesContainer>
    <Media
      title="Section"
      variant="secondary"
      subsection="Subsection"
      sectionImageSrc="https://picsum.photos/id/522/200/200"
    />

    <hr />

    <Media
      title="Section"
      isFetching={true}
      variant="secondary"
      subsection="Subsection"
      sectionImageSrc="https://picsum.photos/id/522/200/200"
    />
  </StoriesContainer>
);
