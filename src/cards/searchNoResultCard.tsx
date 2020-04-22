import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';

export interface SearchNoResultCardProps {
  imageUrl?: string;
  title: string;
  description?: string;
  date?: string;
  // @TODO: Categories should be links? So this should be an array objects with label and link.
  MainLink?: React.ComponentType;
}

export const SearchNoResultCard: FC<SearchNoResultCardProps> = props => {
  const {
    title,
    description,
    MainLink
  } = props;

  return (
    <SourceCard className='card-search-no-result rounded-0 h-100'>
      <div className='row'>
        <div className='col-12 col-xl-12 align-items-center d-flex'>
          <SourceCard.Body className="justify-content-between flex-column">
            <div>
              <SourceCard.Title className='my-2 font-weight-bold'>
                {MainLink && <MainLink>{title}</MainLink>}
              </SourceCard.Title>
              <SourceCard.Text className='mt-2 font-weight-lighter no-result-body'>
                {description}
              </SourceCard.Text>
            </div>
            <div>
              {MainLink && (
                <ReadMoreLinkContainer>
                  <MainLink>
                    <u className='text-uppercase'>Browse</u>
                  </MainLink>
                </ReadMoreLinkContainer>
              )}
            </div>
          </SourceCard.Body>
        </div>
      </div>
    </SourceCard>
  );
};
