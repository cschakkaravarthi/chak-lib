import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { CardImage } from './cardImage';

export interface EmployeeServCardProps {
  imageUrl?: string;
  title: string;
  linkText?: string;
  summary?: JSX.Element | string;
  VisitLink?: React.ComponentType;
}

export const EmployeeServCard: FC<EmployeeServCardProps> = props => {
  const { title, summary, VisitLink, linkText, imageUrl = null } = props;

  return (
    <SourceCard className='card-employee-standard rounded-0 border-0 flex-row h-100'>
      <SourceCard.Title className='text-condensed font-weight-bold card-employee-title font-size-base'>
        {title}
      </SourceCard.Title>

      <div className="card-employee-body d-flex flex-column">
        {imageUrl && (
          <CardImage imageUrl={imageUrl} />
        )}
        <SourceCard.Body className="card-employee-body-content d-flex flex-column justify-content-between h-100">
          <SourceCard.Text className='font-size-sm'>{summary}</SourceCard.Text>
          {VisitLink && (
            <VisitLink>
              <u className='font-size-sm letter-spacing'><b>{linkText}</b></u>
            </VisitLink>
          )}
        </SourceCard.Body>
      </div>
    </SourceCard>
  );
};
