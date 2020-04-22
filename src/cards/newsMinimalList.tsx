import React, { FC } from 'react';

import { ContentWrapper } from '../components/contentWrapper';

export interface MinimalNewsListProps {
  title: string;
}

export const MinimalNewsList: FC<MinimalNewsListProps> = props => {
  const { title, children } = props;

  return (
    <ContentWrapper title={title} topBorder="lightblue">
      {children}
    </ContentWrapper>
  );
};
