import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';
import { ContentWrapper } from '../components/contentWrapper';
import { highlight } from './cardHelper';
import Skeleton from 'react-loading-skeleton';

export interface KnowledgeBaseSearchCardProps {
  title: string;
  date?: string;
  authorName?: string;
  isFetching?: boolean;
  searchKeyword?: string;
  searchSummary?: JSX.Element;
  MainLink?: React.ComponentType;
}

export const KnowledgeBaseSearchCard: FC<KnowledgeBaseSearchCardProps> = props => {
  const {
    date,
    title,
    MainLink,
    authorName,
    searchSummary,
    searchKeyword = '',
    isFetching = false
  } = props;

  return (
    <ContentWrapper
      title=""
      showContentTop={false}
      topBorder="darkTurquoise"
      wrapperClass="card-knowledge-base-search-result"
    >
      <div className="justify-content-between flex-column">
        <SourceCard.Title className="">
          {!isFetching && MainLink ? (
            <MainLink>{highlight(title, searchKeyword)}</MainLink>
          ) : (
            <Skeleton width={140} />
          )}
        </SourceCard.Title>
        <SourceCard.Text className="mt-2 font-weight-lighter">
          <span className="pr-3">
            {!isFetching ? authorName : <Skeleton width={130} />}
          </span>
          <span>{!isFetching ? date : <Skeleton width={130} />}</span>
        </SourceCard.Text>
        <SourceCard.Text className="mt-2 p-0 font-weight-lighter">
          {!isFetching ? searchSummary : <Skeleton width={185} count={3} />}
        </SourceCard.Text>

        {!isFetching && MainLink ? (
          <ReadMoreLinkContainer>
            <MainLink>
              <u className="text-uppercase letter-spacing">View More</u>
            </MainLink>
          </ReadMoreLinkContainer>
        ) : (
          <Skeleton width={100} />
        )}
      </div>
    </ContentWrapper>
  );
};
