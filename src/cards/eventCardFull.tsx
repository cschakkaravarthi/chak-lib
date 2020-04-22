import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { Category } from '../interfaces';
import { CardImage } from './cardImage';
import EventModel from './../seeds/event.model';
import { images } from '../assets/images';
export interface EventCardFullProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  content?: JSX.Element;
  date?: string;
  location?: string;
  // @TODO: Categories should be links? So this should be an array objects with label and link.
  categories?: Category[];
  AddToCalenderLink?: (e: React.SyntheticEvent) => void;
  SendInviteEventData?: EventModel | undefined;
}

export const EventCardFull: FC<EventCardFullProps> = props => {
  const {
    imageUrl,
    title,
    subtitle,
    date,
    categories,
    location,
    content,
    AddToCalenderLink,
    SendInviteEventData
  } = props;

  return (
    <SourceCard className='card-event-full rounded-0 border-0'>
      {imageUrl && <CardImage imageUrl={imageUrl} />}
      <SourceCard.Body className='px-3 py-4 p-md-5'>
        <SourceCard.Title className='font-size-xl mt-2 font-weight-bold'>
          {title}
        </SourceCard.Title>
        <SourceCard.Text className='font-size-sm font-weight-bold text-uppercase d-inline text-condensed'>
          {date}
        </SourceCard.Text>
        {categories &&
          categories.map(c => (
            <SourceCard.Text
              className='font-size-sm gray-600 px-2 d-inline-block float-right'
              key={c.drupal_id}>
              {c.title}
            </SourceCard.Text>
          ))}
        <SourceCard.Text className='font-size-sm text-uppercase my-2'>
          {location}
        </SourceCard.Text>
        <div className="row ml-1">
          <button onClick={AddToCalenderLink}>
            <img src={images.calendar} width={15} height={15} className='mr-2 gray-600 d-inline' />
            <SourceCard.Text className='font-size-xs gray-600 d-inline pr-1'>
              <u>Add to Calendar</u>
            </SourceCard.Text>
          </button>
        </div>
        <div className="d-flex flex-column align-items-start align-items-sm-front w-100 ml-1 pl-sm-0 pr-sm-2">
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
        </div>
        <SourceCard.Subtitle className='font-size-base mt-3 mb-2'>
          {subtitle}
        </SourceCard.Subtitle>
        {content}
      </SourceCard.Body>
    </SourceCard>
  );
};
