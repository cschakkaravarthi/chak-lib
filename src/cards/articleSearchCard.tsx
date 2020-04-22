import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';
import { highlight } from './cardHelper';
import Skeleton from 'react-loading-skeleton';

export interface ArticleSearchCardProps {
  title: string;
  date?: string;
  imageUrl?: string;
  isFetching?: boolean;
  content?: JSX.Element;
  searchKeyword?: string;
  MainLink?: React.ComponentType;
}

export const ArticleSearchCard: FC<ArticleSearchCardProps> = props => {
  const {
    title,
    content,
    MainLink,
    searchKeyword = '',
    isFetching = false
  } = props;

  return (
    <SourceCard className="card-article-search rounded-0 h-100 border-0">
      <Row>
        <Col xs="12" xl="12" className="align-items-center d-flex">
          <SourceCard.Body className="justify-content-between flex-column">
            <Col xs="12" xl="12">
              <SourceCard.Title className="my-2">
                {!isFetching && MainLink ? (
                  <MainLink>{highlight(title, searchKeyword)}</MainLink>
                ) : (
                  <Skeleton width={190} />
                )}
              </SourceCard.Title>
              <Col className="mt-2 p-0 font-weight-lighter article-body">
                {!isFetching ? content : <Skeleton width={270} count={3} />}
              </Col>
            </Col>
            <Col xs="12" xl="12">
              {!isFetching && MainLink ? (
                <ReadMoreLinkContainer>
                  <MainLink>
                    <u className="text-uppercase">View More</u>
                  </MainLink>
                </ReadMoreLinkContainer>
              ) : (
                <Skeleton width={100} />
              )}
            </Col>
          </SourceCard.Body>
        </Col>
      </Row>
    </SourceCard>
  );
};
