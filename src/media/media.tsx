import React, { FC } from 'react';
import { SourceMediaProps } from './interfaces';
import { MediaPrimary } from './mediaPrimary';
import { MediaSecondary } from './mediaSecondary';

export interface MediaProps extends SourceMediaProps {
  variant?: string;
}

export const Media: FC<MediaProps> = props => {
  const { variant = 'primary' } = props;

  switch (variant) {
    case 'primary':
      return <MediaPrimary {...props} />;
    case 'secondary':
      return <MediaSecondary {...props} />;
  }

  return null;
};
