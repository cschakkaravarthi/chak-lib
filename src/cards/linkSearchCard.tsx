import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { ReadMoreLinkContainer } from './readMoreLinkContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { highlight } from './cardHelper';
import Skeleton from 'react-loading-skeleton';

export interface LinkSearchCardProps {
  title: string;
  imageSrc?: string;
  isFetching?: boolean;
  searchKeyword?: string;
  searchSummary?: JSX.Element;
  imageWidth?: number | string;
  imageHeight?: number | string;
  MainLink?: React.ComponentType;
}

export const LinkSearchCard: FC<LinkSearchCardProps> = props => {
  const {
    title,
    MainLink,
    imageSrc,
    searchSummary,
    imageWidth = 30,
    imageHeight = 30,
    searchKeyword = '',
    isFetching = false
  } = props;

  return (
    <SourceCard className="card-link-search rounded-0 h-100 border-0">
      <Row>
        <Col xs="12" xl="12" className="align-items-center d-flex">
          <SourceCard.Body className="justify-content-between flex-column">
            <Col xs="12" xl="12">
              <SourceCard.Title className="my-2">
                {!isFetching && MainLink ? (
                  <MainLink>
                    <Image
                      src={imageSrc}
                      width={imageWidth}
                      height={imageHeight}
                      className="pr-2 mb-1 d-inline"
                    />{' '}
                    {highlight(title, searchKeyword)}{' '}
                  </MainLink>
                ) : (
                  <Skeleton width={200} />
                )}
              </SourceCard.Title>
              <Col xs="12" xl="12" className="mt-2 p-0 font-weight-lighter">
                {!isFetching ? (
                  searchSummary
                ) : (
                  <Skeleton width={270} count={3} />
                )}
              </Col>
            </Col>
            <Col xs="12" xl="12">
              {!isFetching && MainLink ? (
                <ReadMoreLinkContainer>
                  <MainLink>
                    <u className="letter-spacing">View More</u>
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
