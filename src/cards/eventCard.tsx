import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { Category } from '../interfaces';
import { CardImage } from './cardImage';
import EventModel from './../seeds/event.model';
import { images } from '../assets/images';
import Skeleton from 'react-loading-skeleton';

export interface EventCardProps {
  imageUrl?: string;
  title: string;
  date?: string;
  location?: string;
  className?: string;
  isFetching?: boolean;
  // @TODO: Categories should be links? So this should be an array objects with label and link.
  categories?: Category[];
  MainLink?: React.ComponentType;
  MoreInfoLink?: React.ComponentType;
  pictureSkeletonHeight?: string | number;
  SendInviteEventData?: EventModel | undefined;
  AddToCalenderLink?: (e: React.SyntheticEvent) => void;
}

export const EventCard: FC<EventCardProps> = props => {
  const {
    date,
    title,
    location,
    imageUrl,
    className,
    categories,
    MainLink = null,
    AddToCalenderLink,
    isFetching = false,
    SendInviteEventData,
    MoreInfoLink = null,
    pictureSkeletonHeight = 100
  } = props;

  return (
    <SourceCard className={`${className} card-event-standard rounded-0 h-100 border-0`}>
      {!isFetching ? (
        imageUrl &&
        MainLink && (
          <MainLink>
            <CardImage imageUrl={imageUrl} />
          </MainLink>
        )
      ) : (
        <Skeleton height={pictureSkeletonHeight} />
      )}
      <SourceCard.Body>
        <SourceCard.Title className="my-2 font-weight-bold font-size-base text-condensed card-title h5">
          {!isFetching ? MainLink && <MainLink>{title}</MainLink> : <Skeleton count={2} />}
        </SourceCard.Title>
        <SourceCard.Text className="font-size-sm text-uppercase mb-1 font-weight-bold text-condensed">
          <span className="mr-3">{!isFetching ? date : <Skeleton width={100} />}</span>
          {!isFetching ? (
            categories &&
            categories.map(c => (
              <SourceCard.Text
                className="font-size-sm gray-600 pr-3 d-inline font-weight-bold text-upper"
                key={c.drupal_id}
              >
                {c.title}
              </SourceCard.Text>
            ))
          ) : (
            <Skeleton width={150} />
          )}
        </SourceCard.Text>
        <SourceCard.Text className="font-size-sm mt-2">
          {!isFetching ? location : <Skeleton width={120} />}
        </SourceCard.Text>
        <div className="row ml-1">
          <button onClick={AddToCalenderLink}>
            {!isFetching ? (
              <>
                <img src={images.calendar} width={15} height={15} className="mr-2 gray-600 d-inline" />
                <SourceCard.Text className="font-size-xs gray-600 d-inline pr-1">
                  <u>Add to Calendar</u>
                </SourceCard.Text>
              </>
            ) : (
              <Skeleton width={100} height={10} />
            )}
          </button>
        </div>
        <div className="d-flex flex-column align-items-start align-items-sm-front w-100 ml-1 pl-sm-0 pr-sm-2">
          <SourceCard.Title className="mb-2">
            {!isFetching ? (
              <>
                <img src={images.envelope} width={15} height={15} className="mr-2 gray-600 d-inline envelop-icon" />
                <SourceCard.Text className="font-size-xs gray-600 d-inline pr-1">
                  <u>
                    <a
                      className="gray-600-hover gray-600"
                      href={`mailto:?subject=${SendInviteEventData &&
                        SendInviteEventData.title}&body=${SendInviteEventData && SendInviteEventData.emailBody}`}
                    >
                      Send Invite
                    </a>
                  </u>
                </SourceCard.Text>
              </>
            ) : (
              <Skeleton width={100} height={10} />
            )}
          </SourceCard.Title>
        </div>
        {MoreInfoLink && (
          <MoreInfoLink>
            <u className="font-size-sm my-2 font-weight-bold text-uppercase d-block letter-spacing">
              {!isFetching ? 'More Info' : <Skeleton width={100} height={20} />}
            </u>
          </MoreInfoLink>
        )}
      </SourceCard.Body>
    </SourceCard>
  );
};
