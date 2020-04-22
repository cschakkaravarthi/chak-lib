import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { PeopleCardProps } from '../interfaces';
import { ContentWrapper } from '../components/contentWrapper';
import { EditButton } from '../components/editButton';
import { images } from '../assets/images';
import Skeleton from 'react-loading-skeleton';

export const PeopleCard: FC<PeopleCardProps> = props => {
  const {
    desk,
    title,
    center,
    loader,
    imageUrl,
    location,
    department,
    companyName,
    isUploading,
    isCurrentUser,
    hasProfilePhoto,
    handleChangePhoto,
    handleDeletePhoto,
    isFetching = false
  } = props;

  const getImage = (): string | undefined => {
    if (isUploading) {
      return loader;
    } else {
      return imageUrl;
    }
  };

  return (
    <ContentWrapper
      title=""
      showContentTop={false}
      bodyClass="d-flex flex-column flex-md-row"
      wrapperClass="card-people-profile text-condensed h-100"
    >
      <div>
        {!isFetching && imageUrl ? (
          <div className="card-people-avatar">
            <SourceCard.Img variant="top" src={getImage()} className="rounded-circle" />
          </div>
        ) : (
          <span className="circle-skeleton card-people-avatar">
            <Skeleton circle={true} height={200} width={200} />
          </span>
        )}
        {isCurrentUser && (
          <div className="pt-2">
            {!isFetching ? (
              handleChangePhoto && (
                <EditButton
                  className="text-md-center p-lg-0 pl-3 d-block"
                  title="Change Photo"
                  handleClick={handleChangePhoto}
                ></EditButton>
              )
            ) : (
              <span className="text-md-center p-lg-0 pl-3 d-block">
                <Skeleton width={150} />
              </span>
            )}
            {!isFetching ? (
              handleDeletePhoto &&
              hasProfilePhoto && (
                <EditButton
                  className="text-md-center p-lg-0 pl-3 d-block"
                  title="Remove Photo"
                  handleClick={handleDeletePhoto}
                  imageSrc={images.remove}
                ></EditButton>
              )
            ) : (
              <span className="text-md-center p-lg-0 pl-3 d-block">
                <Skeleton width={150} />
              </span>
            )}
          </div>
        )}
        {isUploading && (
          <div className="text-center">
            <span className="font-size-xs">Processing</span>
          </div>
        )}
      </div>
      <SourceCard.Body>
        <SourceCard.Title className="font-weight-bold mb-3">
          {!isFetching ? title : <Skeleton width={220} />}
        </SourceCard.Title>
        <SourceCard.Text className="text-upper font-size-sm">
          <div>{!isFetching ? location : <Skeleton width={120} />}</div>
          <div>{!isFetching ? companyName : <Skeleton width={130} />}</div>
          <div>{!isFetching ? department : <Skeleton width={115} />}</div>
          <div>{!isFetching ? `Profit Center: ${center}` : <Skeleton width={140} />}</div>
          <div>{!isFetching ? `Desk: ${desk}` : <Skeleton width={90} />}</div>
        </SourceCard.Text>
      </SourceCard.Body>
    </ContentWrapper>
  );
};
