import React, { FC } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { UploadButton } from './uploadButton';

import '../../scss/_modal.scss';

export interface ConfirmationModalProps {
  show: boolean;
  dialogMessage: string;
  okayButtonText?: string;
  cancelButtonText?: string;
  handleClose: () => void;
  handleSave: () => void;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = props => {
  const {
    show,
    dialogMessage,
    okayButtonText = 'Okay',
    cancelButtonText = 'Cancel',
    handleClose,
    handleSave
  } = props;
  return (
    <Modal show={show} onHide={handleClose} className="confirmation-modal">
      <Modal.Body className="text-condensed font-weight-bold text-center pt-5">{dialogMessage}</Modal.Body>
      <Modal.Footer className="border-0 d-flex justify-content-center">
        <Row className="w-100 mb-5">
          <Col xs="6" className="text-center">
            <UploadButton
              handleClick={ handleClose }
              title={cancelButtonText}
              uniqueIdentifier="close"
              className="font-size-sm text-upper"
            />
          </Col>
          <Col xs="6" className="text-center">
            <UploadButton
              handleClick={handleSave}
              title={okayButtonText}
              uniqueIdentifier="save"
              className="font-size-sm text-upper"
            />
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};
