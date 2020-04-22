import React, { FC } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { UploadButton } from './uploadButton';

import '../../scss/_modal.scss';

export interface AlertModalProps {
  show: boolean;
  dialogMessage: string;
  alertButtonText?: string;
  handleClose: () => void;
}

export const AlertModal: FC<AlertModalProps> = props => {
  const {
    show,
    dialogMessage,
    alertButtonText = 'Ok',
    handleClose
  } = props;
  return (
    <Modal show={show} onHide={handleClose} className="alert-modal">
      <Modal.Body className="text-condensed font-weight-bold text-center pt-5">{dialogMessage}</Modal.Body>
      <Modal.Footer className="border-0 d-flex justify-content-center">
        <Row className="w-100 mb-5">
          <Col lg="12" md="12" className="text-center">
            <UploadButton
              handleClick={handleClose}
              title={alertButtonText}
              uniqueIdentifier="close"
              className="font-size-sm text-upper primary-button"
            />
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};
