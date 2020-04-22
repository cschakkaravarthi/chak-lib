import React, { FC } from 'react';
import { ContentWrapper } from '../components/contentWrapper';
import { UploadButton } from '../components/uploadButton';
import Skeleton from 'react-loading-skeleton';

export interface AppreciationCardNotificationProps {
  title: string;
  className?: string;
  isFetching?: boolean;
  buttonTitle?: string;
  wrapperClass?: string;
  onClick?: (e?: React.SyntheticEvent) => void;
}

export const AppreciationCardNotification: FC<AppreciationCardNotificationProps> = props => {
  const { title, onClick, className, wrapperClass, buttonTitle = 'View Card', isFetching = false } = props;

  return (
    <ContentWrapper
      title=""
      showContentTop={false}
      topBorder="darkTurquoise"
      wrapperClass={`${wrapperClass}`}
      bodyClass="d-flex justify-content-between align-items-center"
    >
      {!isFetching ? <p className={`font-weight-bold p-0 m-0 ${className}`}>{title}</p> : <Skeleton width={200} />}
      {!isFetching ? (
        <UploadButton title={buttonTitle} handleClick={onClick} className="primary-button text-uppercase btn-sm" />
      ) : (
        <Skeleton width={100} height={30} />
      )}
    </ContentWrapper>
  );
};
