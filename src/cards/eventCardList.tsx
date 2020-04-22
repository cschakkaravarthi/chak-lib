import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';

export interface ListCardProps {
  title: string;
  AllEventsLink?: React.ComponentType;
}

export const ListCard: FC<ListCardProps> = props => {
  const { title, AllEventsLink, children } = props;

  return (
    <SourceCard className="card-event-list rounded-0 border-0">
      <SourceCard.Body>
        <div className="row">
          <div className="col-9">
            <SourceCard.Title className="font-size-xl font-weight-bold">
              {title}
            </SourceCard.Title>
          </div>
          <div className="col-3">
            {AllEventsLink && (
              <AllEventsLink>
                <u>All Events</u>
              </AllEventsLink>
            )}
          </div>
        </div>
        {children}
      </SourceCard.Body>
    </SourceCard>
  );
};
