import React, { FC } from 'react';
import { Media as SourceMedia } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import { SourceMediaProps } from './interfaces';

import '../../scss/_media.scss';

export const MediaPrimary: FC<SourceMediaProps> = props => {
  const { title, bodyText, sectionImageSrc, isFetching = false } = props;

  return (
    <SourceMedia bsPrefix="media">
      {!isFetching ? (
        <img width={64} height={64} alt={title} src={sectionImageSrc} className="mr-4 rounded-circle mt-3" />
      ) : (
        <span className="circle-skeleton mr-4 mt-3">
          <Skeleton circle={true} height={64} width={64} />
        </span>
      )}
      <SourceMedia.Body>
        <p className="font-weight-bold font-size-lg">{!isFetching ? title : <Skeleton width={150} />}</p>
        <p className="font-size-base">{!isFetching ? bodyText : <Skeleton width={300} />}</p>
      </SourceMedia.Body>
    </SourceMedia>
  );
};
