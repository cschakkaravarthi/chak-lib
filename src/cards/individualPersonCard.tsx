import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { CardImage } from './cardImage';

export interface IndividualPersonCardProps {
  title: string;
  fullName?: string;
  imageUrl?: string;
  MainLink?: React.ComponentType;
}

export const IndividualPersonCard: FC<IndividualPersonCardProps> = props => {
  const { imageUrl, title, fullName, MainLink = null } = props;

  return (
    <SourceCard className="rounded-0 h-100 border-0">
      {imageUrl && MainLink && (
        <MainLink>
          <CardImage imageUrl={imageUrl} />
        </MainLink>
      )}
      <SourceCard.Body>
        {MainLink && (
          <MainLink>
            <strong className="font-size-base my-2 font-weight-bold text-uppercase d-block text-center">
              {fullName}
            </strong>
            <span className="font-size-sm my-2 text-uppercase d-block text-center">
              {title}
            </span>
          </MainLink>
        )}
      </SourceCard.Body>
    </SourceCard>
  );
};
