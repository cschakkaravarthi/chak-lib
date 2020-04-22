import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { CardImage } from './cardImage';

export interface MinimalCardProps {
  title: string;
  imageUrl?: string;
  extension?: string;
  MainLink?: React.ComponentType;
}

export const MinimalCard: FC<MinimalCardProps> = props => {
  const { imageUrl, title, MainLink = null } = props;

  return (
    <SourceCard className="rounded-0 h-100">
      {imageUrl && MainLink && (
        <MainLink>
          <CardImage imageUrl={imageUrl} />
        </MainLink>
      )}
      <SourceCard.Body className="p-2">
        {MainLink && (
          <MainLink>
            <span className="font-size-sm font-weight-bold d-block">
              {title}
            </span>
          </MainLink>
        )}
      </SourceCard.Body>
    </SourceCard>
  );
};
