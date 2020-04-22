import React, { FC } from 'react';
import { Form, Col } from 'react-bootstrap';
import { Textbox } from '../components/textbox';
import { ContactMeEditCardProps } from '../interfaces';
import { ContentWrapper } from '../components/contentWrapper';
import { PrimaryButton } from '../components/primaryButton';
import { CancelButton } from '../components/cancelButton';

export const ContactMeForm: FC<ContactMeEditCardProps> = props => {
  const {
    title,
    mobileNumber,
    handleSave,
    handleCancel,
    handleChange,
    mobileNumberMaxLength
  } = props;

  return (
    <ContentWrapper title={title} subtitle="All information is visible to anyone on UMG Central." subtitleClass="gray-600 font-size-sm d-lg-inline ml-lg-4 form-user-desc-subtitle" titleClass="font-size-md font-weight-bold text-uppercase d-lg-inline flex-row mb-0" topBorder='darkTurquoise' wrapperClass='h-100'>
      <Form className='form-user-description mt-4'>
        <Form.Row>
          <Col>
            <Form.Group controlId="formMobile" className="pr-md-2">
              <Textbox
                controlId="formMobile"
                className="font-weight-bold text-condensed"
                maxLength={mobileNumberMaxLength}
                name="mobileNumber"
                label="Mobile"
                placeholder="+1 999 999 9999"
                type="tel"
                value={mobileNumber}
                handleChange={handleChange}
                allowCheckbox={false}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className='mt-2 mb-2'>
          <Col
            md={12}
            className='d-flex justify-content-end mt-2'
          >
            <CancelButton
              title="Cancel"
              className='cancel-button text-underlined text-upper border border-0 mr-3'
              uniqueIdentifier="ok"
              handleClick={handleCancel}
            />
            <PrimaryButton
              title="Save"
              className='text-upper'
              uniqueIdentifier="ok"
              handleClick={handleSave}
            />
          </Col>
        </Form.Row>
      </Form>
    </ContentWrapper>
  );
};
