import React, { FC } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Nav } from './nav';

import { NavOverlayProps } from './interfaces';

import { PrimaryButton } from '../components/primaryButton';

import '../../scss/_nav.scss';
import '../../scss/_modal.scss';

export const NavOverlay: FC<NavOverlayProps> = props => {
  return (
    <Modal
      size="xl"
      show={props.show}
      className="nav-overlay"
      onHide={() => props.setShow(false)}
      aria-labelledby="nav-overlay-title"
      backdropClassName="all-links-backdrop"
    >
      <Modal.Header>
        <Row className="w-100">
          <Col sm={12} md={3} lg={3} xl={3} className="p-2 p-sm-2 p-md-2">
            <Button
              variant="link"
              className="modal-close-button btn-upper text-left"
              onClick={() => props.setShow(false)}
            >
              <span className="css-icon-x" />
              Close
            </Button>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6} className="p-sm-2 p-md-2">
            {props.editMode && (
              <div>
                <p className="font-size-xs gray-600 pl-2 pl-sm-3 m-0">
                  You may select up to 7 links to display in the 'My Links'
                </p>
                <p className="font-size-xs gray-600 pl-2 pl-sm-3 m-0">
                  Check/Uncheck the boxes to make your selection
                </p>
              </div>
            )}
          </Col>
          <Col sm={12} md={3} lg={3} xl={3}>
            {props.editMode ? (
              <PrimaryButton
                className="btn-primary font-size-sm letter-spacing-01rem ml-2 mt-2 ml-sm-3"
                handleClick={props.handleAdd}
                title="ADD TO MY LINKS"
              ></PrimaryButton>
            ) : (
              <PrimaryButton
                className="btn-primary font-size-sm letter-spacing-01rem ml-2 mt-2 ml-sm-3"
                handleClick={props.handleEdit}
                title="EDIT MY LINKS"
              ></PrimaryButton>
            )}
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {props.navGroups.map(group => (
            <Col md={4} xl={3} key={group.key}>
              <Nav
                {...group}
                variant="secondary"
                sectionIcon={group.sectionIcon}
              />
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
};
