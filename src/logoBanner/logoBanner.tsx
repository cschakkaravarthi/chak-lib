import React, { FC } from 'react';
import Image from 'react-bootstrap/Image';
import Skeleton from 'react-loading-skeleton';

import '../../scss/_banner.scss';

export interface LogoBannerProps {
  logoSrc: string;
  bannerSrc: string;
  isFetching?: boolean;
}

export const LogoBanner: FC<LogoBannerProps> = props => {
  const { logoSrc, bannerSrc, isFetching = false } = props;

  return !isFetching ? (
    <div style={{ backgroundImage: `url(${bannerSrc})` }} className="banner-props">
      <div className="banner-props dark-linear-gradient d-flex justify-content-end">
        <div className="d-flex align-items-center mx-lg-5 mx-sm-5 mx-3">
          <Image className="logo-props" src={logoSrc} rounded />
        </div>
      </div>
    </div>
  ) : (
    <Skeleton height={145} />
  );
};
