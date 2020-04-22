import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import SourceCard from 'react-bootstrap/Card';
import { Users, Manager } from './../seeds/OrgChart.model';
import Skeleton from 'react-loading-skeleton';
import '../../scss/_orgchart.scss';

export interface OrgChartProps {
  Users: Users;
  isFetching?: boolean;
  handleManagerClick?: (value?: string) => void;
  handleSubordinateClick?: (value?: string) => void;
}

export const OrgChart: FC<OrgChartProps> = props => {
  const {
    handleManagerClick,
    handleSubordinateClick,
    isFetching = false,
    Users: { user, manager, subordinates }
  } = props;

  const skeletonToUse = (): React.ReactElement => (
    <li className="list-unstyled position-relative">
      <Container className="org-chart-child-card  text-left m-0 pl-3">
        <Row className="pl-2 font-weight-bold pr-2">
          <Skeleton width={75} height={10} />
        </Row>
        <Row className="pl-2 text-condensed">
          <Skeleton width={105} height={10} />
        </Row>
      </Container>
    </li>
  );

  return (
    <SourceCard className="cards-list-container fix-height p-3 border-0 rounded-0 h-100">
      <SourceCard.Body>
        <div className="d-flex justify-content-between align-items-baseline mb-3">
          <SourceCard.Title className="text-upper mb-4 font-size-md">
            {!isFetching ? 'ORG CHART' : <Skeleton width={55} />}
          </SourceCard.Title>
        </div>
        <div className="org-chart font-size-sm overflow-auto">
          <ul>
            {manager ? (
              <li className="list-unstyled position-relative">
                <button onClick={() => handleManagerClick!(manager.email)} className="w-100">
                  <Container className="org-chart-child-card text-left m-0 pl-3">
                    <Row className="pl-2 font-weight-bold pr-2">
                      {!isFetching ? manager.name : <Skeleton width={100} height={10} />}
                    </Row>
                    <Row className="pl-2 text-condensed">
                      {!isFetching ? manager.title : <Skeleton width={75} height={10} />}
                    </Row>
                  </Container>
                </button>
                <ul>
                  <li className="list-unstyled position-relative">
                    <div>
                      <Container className="org-chart-parent-card m-0  pt-2 pl-3 pb-2">
                        <Row className="pl-2 font-weight-bold pr-2 text-left org-chart-parent-card-font">
                          {!isFetching ? user.name : <Skeleton width={75} height={10} />}
                        </Row>
                      </Container>
                    </div>
                    <ol>
                      {!isFetching && subordinates
                        ? subordinates.map((m: Manager) => (
                          <li className="list-unstyled position-relative" key={m.email}>
                            <button onClick={() => handleSubordinateClick!(m.email)} className="w-100">
                              <Container className="org-chart-child-card  text-left m-0 pl-3">
                                <Row className="pl-2 font-weight-bold pr-2">{m.name}</Row>
                                <Row className="pl-2 text-condensed">{m.title}</Row>
                              </Container>
                            </button>
                          </li>
                        ))
                        : skeletonToUse()}
                    </ol>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="list-unstyled position-relative">
                <div>
                  <Container className="org-chart-parent-card m-0  pt-2 pl-3 pb-2">
                    <Row className="pl-2 font-weight-bold pr-2 text-left org-chart-parent-card-font">
                      {!isFetching ? user.name : <Skeleton width={100} height={10} />}
                    </Row>
                  </Container>
                </div>
                <ol>
                  {!isFetching && subordinates
                    ? subordinates.map((m: Manager) => (
                      <li className="list-unstyled position-relative" key={m.email}>
                        <button
                          onClick={() => handleSubordinateClick!(m.email)}
                          className="cursor-pointer text-decoration-none"
                        >
                          <Container className="org-chart-child-card  text-left m-0 pl-3">
                            <Row className="pl-2 font-weight-bold pr-2">{m.name}</Row>
                            <Row className="pl-2 text-condensed">{m.title}</Row>
                          </Container>
                        </button>
                      </li>
                    ))
                    : skeletonToUse()}
                </ol>
              </li>
            )}
          </ul>
        </div>
      </SourceCard.Body>
    </SourceCard>
  );
};
