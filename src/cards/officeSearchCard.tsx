import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { highlight } from './cardHelper';
import Skeleton from 'react-loading-skeleton';

export interface OfficeSearchCardProps {
  title: string;
  isFetching?: boolean;
  searchKeyword?: string;
  MainLink?: React.ComponentType;
  officeAddress?: JSX.Element | string;
}

export const OfficeSearchCard: FC<OfficeSearchCardProps> = props => {
  const {
    title,
    MainLink,
    officeAddress,
    isFetching = false,
    searchKeyword = ''
  } = props;

  return (
    <SourceCard className="card-office-search rounded-0 h-100 border-0">
      <Row>
        <Col xs="12" xl="12" className="align-items-center d-flex">
          <SourceCard.Body className="justify-content-between flex-column">
            <Col xs="12" xl="12">
              <SourceCard.Title className="my-2">
                {!isFetching && MainLink
                  ? <MainLink> {highlight(title, searchKeyword)} </MainLink>
                  : <Skeleton width={220} />}
              </SourceCard.Title>
              <Col xs="12" xl="12" className="mt-2 mb-0 p-0 font-weight-lighter office-address">
                {!isFetching ? officeAddress
                  : <>
                    <p><Skeleton width={210} /></p>
                    <p><Skeleton width={230} /></p>
                  </>}
              </Col>
            </Col>
            <Col xs="12" xl="12">
              {!isFetching && MainLink ? (
                <ReadMoreLinkContainer>
                  <MainLink>
                    <u className="letter-spacing">View More</u>
                  </MainLink>
                </ReadMoreLinkContainer>
              ) : <Skeleton width={75} />}
            </Col>
          </SourceCard.Body>
        </Col>
      </Row>
    </SourceCard>
  );
};
