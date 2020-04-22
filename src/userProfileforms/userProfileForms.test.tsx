import React from 'react';
import { shallowRender } from '../services/testHelper';
import { GetToKnowMeForm } from './getToKnowMeForm';
import { ContactMeForm } from './contactMeForm';

describe('GetToKnowMeForm', () => {
  it('should render correctly', () => {
    const tree = shallowRender(
      <GetToKnowMeForm
        title="Get to know me"
        nickname="Janie"
        birthDay="1"
        birthMonth="January"
        anniversaryMonth="December"
        anniversaryDay="11"
        languagesSpoken="English, Spanish"
        professionalSkills="Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        currentlyWorking="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        aboutMe="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        handleCheckboxWithIdentifier={(e: React.SyntheticEvent, uniqueIdentifier: string) => {
          e.preventDefault();
          alert(`Checkbox of ${uniqueIdentifier} is clicked.`);
        }}
        handleSave={() => alert('Save Button clicked')}
        handleCancel={() => alert('Cancel Button clicked')}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const tree = shallowRender(
      <ContactMeForm
        title="Contact Me"
        mobileNumber="9900990099"
        handleSave={() => alert('Save Button clicked')}
        handleCancel={() => alert('Cancel Button clicked')}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
