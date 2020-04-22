import React from 'react';
import { shallowRender } from '../services/testHelper';
import { Media } from './media';
import { MediaPrimary } from './mediaPrimary';
import { MediaSecondary } from './mediaSecondary';

describe('Media', () => {
  it('should render primary variant correctly', () => {
    const tree = shallowRender(
      <Media
        variant="primary"
        title="Media title primary"
        sectionImageSrc="https://picsum.photos/id/522/200/200"
        bodyText="Some text to see how the primary body text looks"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render secondary variant correctly', () => {
    const tree = shallowRender(
      <Media
        title="Section"
        variant="secondary"
        subsection="Subsection"
        sectionImageSrc="https://picsum.photos/id/522/200/200"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render primary correctly', () => {
    const tree = shallowRender(
      <MediaPrimary
        title="Media title primary"
        sectionImageSrc="https://picsum.photos/id/522/200/200"
        bodyText="Some text to see how the primary body text looks"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render secondary correctly', () => {
    const tree = shallowRender(
      <MediaSecondary
        title="Section"
        subsection="Subsection"
        sectionImageSrc="https://picsum.photos/id/522/200/200"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
