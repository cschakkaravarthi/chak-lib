import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';

export interface OfficesCardProps {
  type?: string;
  title?: string;
  address?: string;
  drupal_id?: number;
  className?: string;
  onCardClick?: (e: React.SyntheticEvent) => void;
}

export const OfficesCard: FC<OfficesCardProps> = props => {
  return (
    <SourceCard className="card-offices rounded-0">
      <SourceCard.Body className="d-flex flex-column justify-content-start h-100">
        <button
          onClick={props.onCardClick}
          className="font-size-base g700-text-clr text-left"
        >
          <b>{props.title}</b>
        </button>
        <button
          onClick={props.onCardClick}
          className="font-size-sm g600-text-clr text-left text-upper"
        >
          <b>{props.address}</b>
        </button>
      </SourceCard.Body>
    </SourceCard>
  );
};
