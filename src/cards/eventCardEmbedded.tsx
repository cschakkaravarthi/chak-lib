import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { Category } from '../interfaces';
import EventModel from './../seeds/event.model';
import { images } from '../assets/images';
import Skeleton from 'react-loading-skeleton';

export interface EventCardProps {
  imageUrl?: string;
  title: string;
  date?: string;
  isFetching?: boolean;
  location?: string;
  // @TODO: Categories should be links? So this should be an array objects with label and link.
  categories?: Category[];
  MainLink?: React.ComponentType;
  AddToCalenderLink?: (e: React.SyntheticEvent) => void;
  SendInviteEventData?: EventModel | undefined;
}

export const EventCardEmbedded: FC<EventCardProps> = props => {
  const {
    title,
    date,
    categories,
    location,
    MainLink = null,
    AddToCalenderLink,
    SendInviteEventData,
    isFetching = false
  } = props;

  return (
    <SourceCard className="card-event-embedded border-0 pb-4 mb-4 px-0">
      <div className="row">
        <div className="col-12">
          <SourceCard.Title className="font-weight-bold mb-2">
            {!isFetching ? MainLink && <MainLink>{title}</MainLink> : <Skeleton />}
          </SourceCard.Title>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-8">
          <SourceCard.Text className="font-size-sm font-weight-bold text-uppercase mb-1 mr-3 d-inline text-condensed">
            {!isFetching ? date : <Skeleton width={50} />}
          </SourceCard.Text>
          {!isFetching ? categories &&
            categories.map(c => (
              <SourceCard.Text
                className="font-size-sm font-weight-bold gray-600 mb-1 d-inline"
                key={c.drupal_id}
              >
                {c.title.toUpperCase()}
              </SourceCard.Text>
            )) : <Skeleton width={50} />}
          <SourceCard.Text className="font-size-sm mt-1">
            {!isFetching ? location : <Skeleton width={100} />}
          </SourceCard.Text>
        </div>
        <div className="col-12 col-sm-4">
          <div className="row">
            <div className="d-flex flex-column align-items-start align-items-sm-front w-100 pl-3 pl-sm-0 pr-sm-2">
              {!isFetching ? (
                <button onClick={AddToCalenderLink}>
                  <img src={images.calendar} width={15} height={15} className='mr-2 gray-600 d-inline' />
                  <SourceCard.Text className="font-size-xs gray-600 d-inline pr-1">
                    <u>Add to Calendar</u>
                  </SourceCard.Text>
                </button>) : <Skeleton width={100} />}
            </div>
            <div className="d-flex flex-column align-items-start align-items-sm-front w-100 pl-3 pl-sm-0 pr-sm-2">
              {!isFetching ? (
                <SourceCard.Title className="mb-2">
                  <img src={images.envelope} width={15} height={15} className='mr-2 gray-600 d-inline envelop-icon' />
                  <SourceCard.Text className="font-size-xs gray-600 d-inline pr-1">
                    <u>
                      <a className="gray-600-hover gray-600" href={`mailto:?subject=${SendInviteEventData && SendInviteEventData.title}&body=${SendInviteEventData && SendInviteEventData.emailBody}`}>
                        Send Invite
                      </a>
                    </u>
                  </SourceCard.Text>
                </SourceCard.Title>
              ) : <Skeleton width={100} />}
            </div>
          </div>
        </div>
      </div>
    </SourceCard>
  );
};
