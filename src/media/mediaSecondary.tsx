import React, { FC } from 'react';
import { Media as SourceMedia } from 'react-bootstrap';
import { SourceMediaProps } from './interfaces';
import Skeleton from 'react-loading-skeleton';

import '../../scss/_media.scss';
import { images } from '../assets/images';

export const MediaSecondary: FC<SourceMediaProps> = props => {
  const { title, subsection, sectionImageSrc, isFetching = false } = props;

  return (
    <SourceMedia bsPrefix="media">
      {!isFetching ? (
        <img width={64} height={64} src={sectionImageSrc} alt="Generic placeholder" className="mr-4 rounded-circle" />
      ) : (
        <span className="circle-skeleton mr-4">
          <Skeleton circle={true} height={64} width={64} />
        </span>
      )}
      <SourceMedia.Body>
        <div className="font-size-lg mt-3">
          {!isFetching ? title : <Skeleton width={100} />}
          <span className="mx-3">
            {!isFetching ? (
              <img src={images.caretRight} width={10} height={30} className="gray-600 d-inline" />
            ) : (
              <Skeleton width={15} />
            )}
          </span>
          <span className="font-weight-bold">{!isFetching ? subsection : <Skeleton width={150} />}</span>
        </div>
      </SourceMedia.Body>
    </SourceMedia>
  );
};
