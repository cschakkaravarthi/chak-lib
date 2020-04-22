import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { ContactMeCardProps } from '../interfaces';
import { Image } from 'react-bootstrap';
import { images } from '../assets/images';
import Skeleton from 'react-loading-skeleton';

const imageSize50 = 50;
const imageSize20 = 20;

export const MyContacts: FC<ContactMeCardProps> = props => {
  const { title, office, mobile, email, handleClick, contactPic, LinkToProfile, isFetching = false } = props;

  return (
    <SourceCard className="h-100 card-light-border card-contact rounded-0">
      <SourceCard.Body>
        <div className="d-flex justify-content-between">
          <div className="mb-3">
            {!isFetching ? (
              <Image src={contactPic} roundedCircle className="" width={imageSize50} height={imageSize50} />
            ) : (
              <span className="circle-skeleton mt-3">
                <Skeleton circle={true} height={imageSize50} width={imageSize50} />
              </span>
            )}
            {!isFetching ? (
              <SourceCard.Title className="ml-4 d-inline font-weight-bold text-capitalize text-condensed align-text-top">
                {LinkToProfile && <LinkToProfile>{title}</LinkToProfile>}
              </SourceCard.Title>
            ) : (
              <span className="ml-4 position-absolute mt-3">
                <Skeleton width={100} />
              </span>
            )}
          </div>
          {!isFetching ? (
            handleClick && (
              <button className="align-self-start">
                <Image
                  src={images.remove}
                  width={imageSize20}
                  height={imageSize20}
                  onClick={handleClick}
                  className="cursor-pointer"
                />
              </button>
            )
          ) : (
            <span className="circle-skeleton">
              <Skeleton circle={true} height={imageSize20} width={imageSize20} />
            </span>
          )}
        </div>
        <SourceCard.Text className="font-size-sm">
          <div className="mb-2">
            <span className="text-upper text-secondary d-inline-block">
              {!isFetching ? 'Office' : <Skeleton width={50} />}
            </span>
            <a href={`tel:${office}`} className="">
              {!isFetching ? office : <Skeleton width={75} />}
            </a>
          </div>
          <div className="mb-2">
            <span className="text-upper text-secondary d-inline-block">
              {!isFetching ? 'Mobile' : <Skeleton width={45} />}
            </span>
            <a href={`tel:${mobile}`} className="">
              {!isFetching ? mobile : <Skeleton width={70} />}
            </a>
          </div>
          <div className="mb-2 d-flex align-items-baseline">
            <span className="text-upper text-secondary d-inline-block">
              {!isFetching ? 'Email' : <Skeleton width={40} />}
            </span>
            <a href={`mailto:${email}`} className=" text-break">
              {!isFetching ? email : <Skeleton width={70} />}
            </a>
          </div>
        </SourceCard.Text>
      </SourceCard.Body>
    </SourceCard>
  );
};
