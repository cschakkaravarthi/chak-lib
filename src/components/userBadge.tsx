import React, { FC } from 'react';
import { Image } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export interface UserBadgeProps {
  fullName: string;
  imageUrl: string;
  className?: string;
  hrefData?: string;
  isFetching?: boolean;
  circleSkeleton?: boolean;
  handleClick?: (e: React.SyntheticEvent) => void;
}

const imageSize = 35;

export const UserBadge: FC<UserBadgeProps> = props => {
  const { hrefData, fullName, imageUrl, className, handleClick, isFetching = false, circleSkeleton = true } = props;

  // the props hrefData fulfills the data-href attr
  // which is to make the component ADA compliant
  // the same as tabIndex and role
  return (
    <span
      role="link"
      tabIndex={0}
      data-href={hrefData}
      onClick={handleClick}
      className={`${className} user-badge text-white d-inline-flex align-items-center align-middle cursor-pointer text-decoration-none`}
    >
      {!isFetching ? (
        <span className="d-none d-sm-inline order-xl-2 font-weight-bold">{fullName}</span>
      ) : (
        <span className="d-none d-sm-inline order-xl-2 user-badge-skeleton-wrapper">
          <SkeletonTheme color="#000" highlightColor="#b1b1b1">
            <Skeleton width={100} />
          </SkeletonTheme>
        </span>
      )}
      {!isFetching ? (
        <Image src={imageUrl} alt={fullName} roundedCircle className="order-xl-1" />
      ) : (
        <SkeletonTheme color="#000" highlightColor="#b1b1b1">
          <span className={`${circleSkeleton && 'circle-skeleton'}`}>
            <Skeleton circle={true} height={imageSize} width={imageSize} />
          </span>
        </SkeletonTheme>
      )}
    </span>
  );
};
