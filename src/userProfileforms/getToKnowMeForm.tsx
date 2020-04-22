import React, { FC } from 'react';
import { Form, Col } from 'react-bootstrap';
import { GetToKnowMeCardProps } from '../interfaces';
import { Textbox } from '../components/textbox';
import { Textarea } from '../components/textarea';
import { PrimaryButton } from '../components/primaryButton';
import { CancelButton } from '../components/cancelButton';
import { ContentWrapper } from '../components/contentWrapper';
import '../../scss/_forms.scss';

export interface GetToKnowMeFormProps extends GetToKnowMeCardProps {
  handleCheckboxWithIdentifier?: (e: React.SyntheticEvent, uniqueIdentifier: string) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: (e: React.SyntheticEvent) => void;
  handleCancel: (e: React.SyntheticEvent) => void;
  textBoxMaxLength?: number;
  textArearBoxMaxLength?: number;
}

export const GetToKnowMeForm: FC<GetToKnowMeFormProps> = props => {
  const {
    title,
    nickname,
    languagesSpoken,
    professionalSkills,
    currentlyWorking,
    aboutMe,
    handleSave,
    handleCancel,
    handleChange,
    birthDay,
    birthMonth,
    anniversaryDay,
    anniversaryMonth,
    textBoxMaxLength,
    textArearBoxMaxLength
  } = props;

  const dates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const deafultOption = <option value="" key="" selected>N/A</option>;
  return (
    <ContentWrapper title={title} titleClass="text-upper d-lg-inline flex-row font-size-md mb-0" subtitle="All information is visible to anyone on UMG Central." subtitleClass="gray-600 font-size-sm d-lg-inline ml-lg-4 form-user-desc-subtitle" topBorder='darkTurquoise' wrapperClass='h-100'>
      <Form className="font-size-sm w-100 form-user-description mt-4">
        <Form.Row className="d-flex justify-content-between">
          <Col >
            <Form.Group controlId="formNickname" className="pr-md-2">
              <Textbox
                controlId="nickname"
                name="nickname"
                maxLength={textBoxMaxLength}
                className="font-weight-bold text-condensed font-size-base"
                label="Nickname"
                type="text"
                value={nickname}
                allowCheckbox={false}
                handleChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col lg={3} md={7}>
            <Form.Group controlId="formBirthMonth">
              <Form.Label className="font-weight-bold text-condensed font-size-base">Birthday</Form.Label>
              <Form.Control name="birthMonth" as="select" value={birthMonth} onChange={handleChange}>
                {deafultOption}
                { months.map((month) => {
                  return <option value={month} key={month}>{month}</option>;
                }) }
              </Form.Control>
            </Form.Group>
          </Col>
          <Col lg={3} md={7} className="paddingRight">
            <Form.Group controlId="formBirthday" className="day-dropdown">
              <Form.Control name="birthday" as="select" value={birthDay} onChange={handleChange}>
                {deafultOption}
                { dates.map((date) => {
                  return <option value={date} key={date}>{date}</option>;
                }) }
              </Form.Control>
            </Form.Group>
          </Col>
          <Col lg={3} md={7}>
            <Form.Group controlId="formAnniversayMonth">
              <Form.Label className="font-weight-bold text-condensed font-size-base">Work Anniversary</Form.Label>
              <Form.Control name="anniversaryMonth" as="select" value={anniversaryMonth} onChange={handleChange}>
                {deafultOption}
                { months.map((month) => {
                  return <option value={month} key={month}>{month}</option>;
                }) }
              </Form.Control>
            </Form.Group>
          </Col>
          <Col lg={3} md={5}>
            <Form.Group controlId="formAnniversayday" className="day-dropdown">
              <Form.Control name="anniversaryDay" as="select" value={anniversaryDay} onChange={handleChange}>
                {deafultOption}
                { dates.map((date) => {
                  return <option value={date} key={date}>{date}</option>;
                }) }
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group controlId="formLanguagesSpoken" className="pr-md-2">
              <Textbox
                controlId="formLanguagesSpoken"
                className="font-weight-bold text-condensed font-size-base"
                name="languagesSpoken"
                maxLength={textBoxMaxLength}
                label="Languages Spoken"
                type="text"
                value={languagesSpoken}
                allowCheckbox={false}
                handleChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Textarea
          controlId="formSkills"
          className="font-weight-bold text-condensed font-size-base"
          maxLength={textArearBoxMaxLength}
          name="professionalSkills"
          label="Professional Skills"
          value={professionalSkills}
          rows={3}
          handleChange={handleChange}
        />

        <Textarea
          controlId="formCurrentlyWorking"
          className="font-weight-bold text-condensed font-size-base"
          maxLength={textArearBoxMaxLength}
          name="currentlyWorking"
          label="What I'm currently working on"
          value={currentlyWorking}
          rows={3}
          handleChange={handleChange}
        />

        <Textarea
          controlId="formAboutme"
          className="font-weight-bold text-condensed font-size-base"
          maxLength={textArearBoxMaxLength}
          name="aboutMe"
          label="Something about me"
          value={aboutMe}
          rows={3}
          handleChange={handleChange}
        />
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
