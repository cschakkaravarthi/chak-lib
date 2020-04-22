import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import EventModel from './../seeds/event.model';
import { images } from '../assets/images';
import { highlight } from './cardHelper';
import Skeleton from 'react-loading-skeleton';

export interface EventSearchCardProps {
  title: string;
  date?: string;
  location?: string;
  isFetching?: boolean;
  searchKeyword?: string;
  MainLink?: React.ComponentType;
  MoreInfoLink?: React.ComponentType;
  SendInviteEventData?: EventModel | undefined;
  AddToCalenderLink?: (e: React.SyntheticEvent) => void;
}

export const EventSearchCard: FC<EventSearchCardProps> = props => {
  const {
    title,
    date,
    location,
    MainLink = null,
    AddToCalenderLink,
    searchKeyword = '',
    isFetching = false,
    MoreInfoLink = null,
    SendInviteEventData
  } = props;

  return (
    <SourceCard className="card-event-search rounded-0 h-100">
      <div className="row">
        <div className="col-12 col-xl-12 align-items-center d-flex">
          <SourceCard.Body className="justify-content-between flex-column">
            <div>
              <SourceCard.Title className="mb-2">
                {!isFetching && MainLink ? (
                  <MainLink>{highlight(title, searchKeyword)}</MainLink>
                ) : (
                  <Skeleton width={230} />
                )}
              </SourceCard.Title>
              <SourceCard.Text className="mt-2 font-weight-lighter">
                {!isFetching ? date : <Skeleton width={140} />}
              </SourceCard.Text>
              <SourceCard.Text className="mt-2 font-weight-lighter">
                {!isFetching ? highlight(location, searchKeyword) : <Skeleton width={190} />}
              </SourceCard.Text>
            </div>
            <div className="row ml-1">
              {!isFetching ? (
                <button onClick={AddToCalenderLink}>
                  <img
                    src={images.calendar}
                    width={15}
                    height={15}
                    className="mr-2 gray-600 d-inline"
                  />
                  <SourceCard.Text className="font-size-xs gray-600 d-inline pr-1">
                    <u>Add to Calendar</u>
                  </SourceCard.Text>
                </button>
              ) : (
                <Skeleton width={100} />
              )}
            </div>
            <div className="d-flex flex-column align-items-start align-items-sm-front w-100 ml-1 pl-sm-0 pr-sm-2">
              {!isFetching ? (
                <SourceCard.Title className="mb-2">
                  <img
                    src={images.envelope}
                    width={15}
                    height={15}
                    className="mr-2 gray-600 d-inline envelop-icon"
                  />
                  <SourceCard.Text className="font-size-xs gray-600 d-inline pr-1">
                    <u>
                      <a
                        className="gray-600-hover gray-600"
                        href={`mailto:?subject=${SendInviteEventData &&
                          SendInviteEventData.title}&body=${SendInviteEventData &&
                          SendInviteEventData.emailBody}`}
                      >
                        Send Invite
                      </a>
                    </u>
                  </SourceCard.Text>
                </SourceCard.Title>
              ) : (
                <Skeleton width={90} />
              )}
            </div>
            <div>
              {!isFetching && MoreInfoLink ? (
                <MoreInfoLink>
                  <u className="font-size-sm my-2 font-weight-bold text-uppercase d-block">
                    View More
                  </u>
                </MoreInfoLink>
              ) : (
                <Skeleton width={80} />
              )}
            </div>
          </SourceCard.Body>
        </div>
      </div>
    </SourceCard>
  );
};
