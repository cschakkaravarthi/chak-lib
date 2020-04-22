import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';

export interface CardsListContainerProps {
  title: string;
  topBorder?: string;
  isFetching?: boolean;
  headerLinkText?: string;
  HeaderLink?: React.ComponentType;
}

export const CardsListContainer: FC<CardsListContainerProps> = props => {
  const { title, children, topBorder, HeaderLink, headerLinkText, isFetching = false } = props;

  return (
    <SourceCard
      className={`cards-list-container h-100 border-0 rounded-0 cards-list-top-border-${topBorder}`}
    >
      <SourceCard.Body>
        <div className="d-flex justify-content-between align-items-baseline mb-3">
          <SourceCard.Title className="font-size-xl font-weight-bold mb-0">
            {!isFetching ? title : <Skeleton width={50} />}
          </SourceCard.Title>
          {!isFetching ? HeaderLink && (
            <div className="font-size-sm gray-600 text-uppercase font-weight-bold">
              <HeaderLink>
                <u className="gray-600 letter-spacing">{headerLinkText}</u>
              </HeaderLink>
            </div>
          ) : <Skeleton width={50} />}
        </div>
        {children}
      </SourceCard.Body>
    </SourceCard>
  );
};
