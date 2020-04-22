import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { ArchiveAppreciation } from './archiveAppreciation';

export default {
  component: ArchiveAppreciation,
  title: 'Archive Appreciation'
};

export const archiveAppreciation = (): JSX.Element => {
  return (
    <StoriesContainer>
      <ArchiveAppreciation
        date="SEP 30, 2019"
        leftTitle="Sender Name"
        MainLink={p => <a href="#">{p.children}</a>}
      />
    </StoriesContainer>
  );
};
