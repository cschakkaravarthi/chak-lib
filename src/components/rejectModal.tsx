import React, { FC } from 'react';
import { Modal, Col } from 'react-bootstrap';
import { UploadButton } from './uploadButton';
import { Textarea } from './textarea';

import '../../scss/_modal.scss';

export interface RejectModalProps {
  show: boolean;
  dialogMessage: string;
  rejectButtonText?: string;
  cancelButtonText?: string;
  handleClose: () => void;
  handleReject: () => void;
  textAreaMaxLength?: number;
  rejectMessage?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RejectModal: FC<RejectModalProps> = props => {
  const {
    show,
    dialogMessage,
    rejectButtonText = 'Reject',
    cancelButtonText = 'Cancel',
    handleClose,
    handleReject,
    textAreaMaxLength,
    rejectMessage,
    handleChange
  } = props;
  return (
    <Modal show={show} onHide={handleClose} className="reject-modal">
      <Modal.Body className="text-condensed font-weight-bold text-left pt-5">
        <Textarea
          label={dialogMessage}
          controlId=''
          maxLength={textAreaMaxLength}
          name="aboutMe"
          value={rejectMessage}
          rows={3}
          handleChange={handleChange}
          textareaClassName="rounded-0"
        />
      </Modal.Body>
      <Modal.Footer className="border-0 d-flex justify-content-right">
        <div className="w-100 mb-5">
          <Col xs="12" className="text-right">
            <UploadButton
              handleClick={ handleClose }
              title={cancelButtonText}
              uniqueIdentifier="close"
              className="font-size-sm text-upper mr-4"
            />
            <UploadButton
              handleClick={ handleReject }
              title={rejectButtonText}
              uniqueIdentifier="reject"
              className="font-size-sm text-upper primary-button"
            />
          </Col>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
