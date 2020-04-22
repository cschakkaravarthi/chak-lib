import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { encode } from '../common/encode';

export interface BrandsLabelsCardProps {
  url?: string;
  imageUrl?: string;
  title: string;
}

export const BrandsLabelsCard: FC<BrandsLabelsCardProps> = props => {
  return (
    <SourceCard className='card-notification-standard rounded-0'>
      <a
        className='card-brand-image d-flex align-items-center'
        href={props.url ? encode(props.url) : '#'}
        target='_blank'>
        {props.imageUrl && (
          <img src={encode(props.imageUrl)} className='w-100' title={props.title} alt={props.title}></img>
        )}
        {!props.imageUrl && (
          <h2 className='text-center w-100'>{props.title}</h2>
        )}
      </a>
    </SourceCard>
  );
};
