import React, { FC, ReactElement } from 'react';
import SourceCard from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';

export interface DepartmentCardProps {
  title: string;
  isFetching?: boolean;
  sectionIcon?: string;
  VisitLink?: React.ComponentType;
  bodyContent?: JSX.Element | string;
}

export const DepartmentCard: FC<DepartmentCardProps> = props => {
  const { title, bodyContent, VisitLink = null, isFetching = false } = props;

  const skeletonSize = (): ReactElement => {
    return (
      <>
        <span className="d-inline d-sm-none">
          <Skeleton width={120} />
        </span>
        <span className="d-none d-sm-inline">
          <Skeleton width={15} height={100} />
        </span>
      </>
    );
  };

  return (
    <SourceCard className="card-department-standard rounded-0 h-100 border-0">
      <SourceCard.Title className="text-condensed font-weight-bold card-department-title font-size-base">
        {!isFetching ? title : skeletonSize()}
      </SourceCard.Title>
      <SourceCard.Body className="d-flex flex-column justify-content-between">
        <div className="d-flex mb-4">
          <SourceCard.Text className="font-size-sm">
            {!isFetching ? bodyContent : <Skeleton width={150} count={3} />}
          </SourceCard.Text>
        </div>
        {VisitLink && (
          <div>
            <VisitLink>
              <u className="font-size-sm text-uppercase letter-spacing">
                <b>{!isFetching ? 'Visit Site' : <Skeleton width={100} />}</b>
              </u>
            </VisitLink>
          </div>
        )}
      </SourceCard.Body>
    </SourceCard>
  );
};
