import React, { FC } from 'react';
import { encode } from '../common/encode';

export interface CardImageProps {
  imageUrl: string;
}

export const CardImage: FC<CardImageProps> = props => {
  return (
    <div style={{ backgroundImage: `url(${encode(props.imageUrl)})` }} className="card-image" />
  );
};
