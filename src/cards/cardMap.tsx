import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { encode } from '../common/encode';

export interface CardMapProps {
  title: string;
  topBorder?: string;
  titleClass?: string;
  addressOnMap?: string;
  address?: string | string[] | JSX.Element;
}

export const CardMap: FC<CardMapProps> = props => {
  const { title, children, titleClass, topBorder, address, addressOnMap } = props;

  if (!address) return null;

  const handleMapUrl = `https://maps.google.com/maps?q=${encode(addressOnMap!)}&t=&z=9&ie=UTF8&iwloc=&output=embed`;

  return (
    <SourceCard
      className={`cards-list-container rounded-0 cards-list-top-border-${topBorder} border-0`}
    >
      <SourceCard.Body>
        <div className="d-flex flex-column justify-content-between align-items-baseline mb-3">
          <SourceCard.Title className={`${titleClass} font-size-base font-weight-bold mb-0`}>
            {title}
          </SourceCard.Title>
          <SourceCard.Text className="my-3">
            {address}
          </SourceCard.Text>
          <div className="mapouter position-relative text-right w-100">
            <div className="gmap_canvas w-100">
              <iframe
                scrolling="no"
                frameBorder="0"
                marginWidth={0}
                marginHeight={0}
                src={handleMapUrl}
              />
            </div>
          </div>
        </div>
        {children}
      </SourceCard.Body>
    </SourceCard>
  );
};
