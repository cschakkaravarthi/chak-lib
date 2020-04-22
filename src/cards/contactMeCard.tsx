import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { EditButton } from '../components/editButton';
import { ContactMeCardProps } from '../interfaces';
import { ButtonWithIcon } from '../components/buttonWithIcon';
import { ContentWrapper } from '../components/contentWrapper';
import Skeleton from 'react-loading-skeleton';

export const ContactMeCard: FC<ContactMeCardProps> = props => {
  const {
    title,
    email,
    office,
    mobile,
    handleClick,
    isCurrentUser,
    addToContactImage,
    isFetching = false,
    handleAddToContacts,
    editButtonLink
  } = props;

  return (
    <ContentWrapper
      title=""
      topBorder="yellow"
      showContentTop={false}
      wrapperClass="card-event-standard card-contact h-100"
    >
      <SourceCard.Body>
        <div className="d-flex justify-content-between">
          <SourceCard.Title className="text-upper mb-3">
            {!isFetching ? title : <Skeleton width={120} />}
          </SourceCard.Title>
          {!isFetching ? (
            isCurrentUser &&
            handleClick && (
              <EditButton handleClick={handleClick} title="Edit" hrefLink={editButtonLink} className="cursor-pointer" />
            )
          ) : (
            <Skeleton width={55} />
          )}
        </div>
        <SourceCard.Text className="font-size-sm font-weight-bold">
          <div className="mb-3">
            <span className="text-upper text-secondary d-inline-block">
              {!isFetching ? 'Office' : <Skeleton width={50} />}
            </span>
            {isCurrentUser && (
              <span className="font-size-base text-condensed">{!isFetching ? office : <Skeleton width={105} />}</span>
            )}
            {!isCurrentUser && (
              <a href={`tel:${office}`} className="font-size-base text-condensed">
                {!isFetching ? office : <Skeleton width={105} />}
              </a>
            )}
          </div>
          <div className="mb-3">
            <span className="text-upper text-secondary d-inline-block">
              {!isFetching ? 'Mobile' : <Skeleton width={53} />}
            </span>
            {isCurrentUser && (
              <span className="font-size-base text-condensed">{!isFetching ? mobile : <Skeleton width={100} />}</span>
            )}
            {!isCurrentUser && (
              <a href={`tel:${mobile}`} className="font-size-base text-condensed">
                {!isFetching ? mobile : <Skeleton width={100} />}
              </a>
            )}
          </div>
          <div className="mb-3 d-flex align-items-baseline">
            <span className="text-upper text-secondary d-inline-block">
              {!isFetching ? 'Email' : <Skeleton width={45} />}
            </span>
            {isCurrentUser && (
              <span className="font-size-base text-condensed text-break">
                {!isFetching ? email : <Skeleton width={120} />}
              </span>
            )}
            {!isCurrentUser && (
              <a href={`mailto:${email}`} className="font-size-base text-condensed text-break">
                {!isFetching ? email : <Skeleton width={120} />}
              </a>
            )}
          </div>
        </SourceCard.Text>
        {!isFetching ? (
          !isCurrentUser &&
          handleAddToContacts && (
            <ButtonWithIcon
              imageWidth={20}
              imageHeight={20}
              title="Add to My Contacts"
              imageSrc={addToContactImage}
              handleClick={handleAddToContacts}
            />
          )
        ) : (
          <Skeleton width={130} />
        )}
      </SourceCard.Body>
    </ContentWrapper>
  );
};
