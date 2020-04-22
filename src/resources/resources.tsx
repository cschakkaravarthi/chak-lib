import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { MinimalCardProps } from './interfaces';
import { images } from '../assets/images';

export const Resources: FC<MinimalCardProps> = props => {
  const { MainLink = null, mainLinkText, extension, external = !extension } = props;

  return (
    <SourceCard className="rounded-0 p-2">
      {MainLink && (
        <MainLink>
          <Row className="w-100 d-flex justify-content-between m-0 p-0 align-items-center">
            <Col sm={9} md={9} lg={9} xl={9}>
              <strong className="font-size-sm">{mainLinkText}</strong>
            </Col>
            <Col sm={3} md={3} lg={3} xl={3} className="text-right">
              {extension && (
                <div className="pr-1 gray-600 d-inline text-uppercase text-right text-nowrap font-size-sm">
                  <strong>{extension}</strong>
                </div>
              )}
              {external && <img src={images.external} width={20} height={20} />}
            </Col>
          </Row>
        </MainLink>
      )}
    </SourceCard>
  );
};
