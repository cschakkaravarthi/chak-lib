import React, { FC } from 'react';
import { Image } from 'react-bootstrap';

export interface SiteLogoProps {
  logoSrc: string;
  hrefData?: string;
  handleClick: (e: React.SyntheticEvent) => void;
}

// the props hrefData fulfills the data-href attr
// which is to make the component ADA compliant
// the same as tabIndex and role

export const SiteLogo: FC<SiteLogoProps> = props => {
  const { handleClick, logoSrc, hrefData } = props;

  return (
    <span onClick={handleClick} data-href={hrefData} role="link" tabIndex={0} className="site-logo cursor-pointer">
      <Image src={logoSrc} />
    </span>
  );
};
