import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { highlight } from './cardHelper';
import Skeleton from 'react-loading-skeleton';

export interface PageSearchCardProps {
  title: string;
  isFetching?: boolean;
  searchKeyword?: string;
  departmentName?: string;
  searchSummary?: JSX.Element;
  MainLink?: React.ComponentType;
}

export const PageSearchCard: FC<PageSearchCardProps> = props => {
  const {
    title,
    MainLink,
    searchSummary,
    departmentName,
    searchKeyword = '',
    isFetching = false
  } = props;

  return (
    <SourceCard className="card-page-search rounded-0 h-100 border-0">
      <Row>
        <Col xs="12" xl="12" className="align-items-center d-flex">
          <SourceCard.Body className="justify-content-between flex-column">
            <Col xs="12" xl="12">
              <SourceCard.Title className="my-2">
                {!isFetching && MainLink
                  ? <MainLink> {highlight(title, searchKeyword)} </MainLink>
                  : <Skeleton width={190} />}
              </SourceCard.Title>
              <SourceCard.Text className="mt-2 font-weight-lighter text-uppercase department">
                {!isFetching ? departmentName : <Skeleton width={200} />}
              </SourceCard.Text>
              <Col xs="12" xl="12" className="p-0 font-weight-lighter">
                {!isFetching ? searchSummary : <Skeleton width={220} count={3} />}
              </Col>
            </Col>
            <Col xs="12" xl="12">
              {!isFetching && MainLink ? (
                <ReadMoreLinkContainer>
                  <MainLink>
                    <u className="letter-spacing">View More</u>
                  </MainLink>
                </ReadMoreLinkContainer>
              ) : <Skeleton width={100} />}
            </Col>
          </SourceCard.Body>
        </Col>
      </Row>
    </SourceCard>
  );
};
