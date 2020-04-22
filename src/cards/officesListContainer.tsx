import React, { FC } from 'react';
import { OfficesCard, OfficesCardProps } from './officesCard';
import { ContentWrapper } from '../components/contentWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface OfficesListProps {
  drupal_id?: number;
  placeName?: string;
  officeList?: OfficesCardProps[];
  categoryType?: string;
}

export interface OfficesCardContainerProps {
  title: string;
  type?: string;
  variant?: string;
  officeData?: OfficesListProps[];
  onCardClick?: (items: OfficesCardProps) => void;
}

export const OfficesListContainer: FC<OfficesCardContainerProps> = props => {
  return (
    <ContentWrapper title="" topBorder="darkTurquoise" bodyClass="text-condensed">
      {props.officeData &&
        props.officeData.map(item => (
          <div key={item.drupal_id}>
            {item.placeName !== '' && (
              <p className="font-size-base g700-text-clr offices-subheader">
                <b>{item.placeName}</b>
              </p>
            )}
            <Row>
              {item.officeList &&
                item.officeList.map(office => (
                  <Col lg={4} md={6} sm={12} className="d-flex">
                    <OfficesCard
                      {...office}
                      key={office.drupal_id}
                      onCardClick={() => {
                        props.onCardClick && props.onCardClick(office);
                      }}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        ))}
    </ContentWrapper>
  );
};
