import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { CardImage } from './cardImage';
import { Col } from 'react-bootstrap';

export interface NewsListEmbeddedProps {
  title: string;
  date?: string;
  imageUrl?: string;
  MainLink?: React.ComponentType;
}

export const NewsListEmbedded: FC<NewsListEmbeddedProps> = props => {
  const { title, date, imageUrl, MainLink } = props;

  return (
    <SourceCard className="news-list-embedded border-0 mb-4 px-0">
      <div className="row">
        <Col xs={4}>
          {MainLink && imageUrl && (
            <MainLink>
              <CardImage imageUrl={imageUrl} />
            </MainLink>
          )}
        </Col>
        <Col bsPrefix="d-flex flex-column col-8">
          <SourceCard.Title className="font-weight-bold mb-2 text-condensed">
            {title}
          </SourceCard.Title>
          <SourceCard.Text className="font-size-sm gray-600 font-weight-bold text-uppercase mb-1 text-condensed">
            {date}
          </SourceCard.Text>
          <SourceCard.Text className="font-size-sm font-weight-bold text-uppercase mb-1">
            {MainLink && (
              <MainLink>
                <u className="letter-spacing">Read More</u>
              </MainLink>
            )}
          </SourceCard.Text>
        </Col>
      </div>
    </SourceCard>
  );
};
