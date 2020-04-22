import React from 'react';

import { shallowRender } from '../services/testHelper';

import { AllLinksButton } from './allLinksButton';
import { HamburgerButton } from './hamburgerButton';
import { NotificationsBadge } from './notificationsBadge';
import { SiteLogo } from './siteLogo';
import { UserBadge } from './userBadge';
import { ContentWrapper } from './contentWrapper';
import { PrimaryButton } from './primaryButton';
import { SecondaryButton } from './secondaryButton';
import { CloseButton } from './closeButton';
import { UploadButton } from './uploadButton';
import { Checkbox } from './checkBox';
import { EditButton } from './editButton';
import { FooterFeedbackView } from './footerFeedbackView';
import { images } from '../assets/images';
import { ThumbButton } from './thumbButton';
import { OrgChart } from './orgChart';
import { dummyUsers } from './../seeds/OrgChart.model';
import { CustomCheckbox } from './customCheckbox';
import { ButtonWithIcon } from './buttonWithIcon';
import { Toast } from './toast';
import { Error } from './error';
import { ConfirmationModal } from './confirmationModal';
import { AlertModal } from './alertModal';
import { DateRangeHeader } from './dateRangeHeader';
import { Partition } from './partition';
import { Textarea } from './textarea';

describe('Components', () => {
  it('Textarea should render correctly', () => {
    const tree = shallowRender(
      <Textarea
        label="Name"
        maxLength={400}
        controlId="formName"
        subLabelClass="ml-3"
        subLabel="Maximun 400 characters"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('Date Range Header should render correctly', () => {
    const tree = shallowRender(<DateRangeHeader leftTitle="From" rightTitle="Date" />);
    expect(tree).toMatchSnapshot();
  });

  it('ContentWrapper should render correctly', () => {
    const tree = shallowRender(
      <ContentWrapper title="Test title">
        <p>Testing ContentWrapper children prop</p>
      </ContentWrapper>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for AllLinksButton', () => {
    const tree = shallowRender(
      <AllLinksButton
        handleClick={() => {
          alert('clicked');
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for HambugerButton', () => {
    const tree = shallowRender(
      <HamburgerButton
        handleClick={() => {
          alert('clicked');
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for NotificationsBadge', () => {
    const tree = shallowRender(
      <NotificationsBadge
        handleClick={() => {
          alert('clicked');
        }}
        notificationCount={3}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for SiteLogo', () => {
    const tree = shallowRender(<SiteLogo logoSrc={images.siteLogo} handleClick={() => alert('clicked')} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for UserBadge', () => {
    const tree = shallowRender(
      <UserBadge
        fullName="Luz Lacson"
        handleClick={() => alert('clicked')}
        imageUrl="https://media.licdn.com/dms/image/C4D03AQHgxarEg1Cvuw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=thBaLX-J3-MoHdpJ3MvombNd4LOKfMHNRPLlmopM6KI"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});

it('should render correctly for Primary button', () => {
  const tree = shallowRender(
    <PrimaryButton handleClick={() => alert('Primary Button clicked')} title="Primary Button" />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Secondary Button', () => {
  const tree = shallowRender(
    <SecondaryButton handleClick={() => alert('Secondary Button clicked')} title="Secondary Button" />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Close toggle Button', () => {
  const tree = shallowRender(
    <CloseButton
      handleClick={() => {
        alert('clicked');
      }}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for CheckBox', () => {
  const tree = shallowRender(
    <Checkbox
      handleClick={() => {
        alert('clicked');
      }}
      title="CheckLabel"
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Edit Button', () => {
  const tree = shallowRender(
    <EditButton
      handleClick={() => {
        alert('clicked');
      }}
      title="Edit"
      hrefLink="https://www.google.com"
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Upload Button', () => {
  const tree = shallowRender(
    <UploadButton
      handleClick={() => {
        alert('clicked');
      }}
      title="Upload"
      uniqueIdentifier="1"
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for FooterFeedbackView', () => {
  const tree = shallowRender(
    <FooterFeedbackView
      handleClick={() => {
        alert('clicked');
      }}
      title="Edit"
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Thumb button unlike', () => {
  const tree = shallowRender(
    <ThumbButton
      liked={false}
      numberOfLikes={12}
      handleClick={() => {
        alert('clicked');
      }}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Thumb button like', () => {
  const tree = shallowRender(
    <ThumbButton
      liked={true}
      numberOfLikes={12}
      handleClick={() => {
        alert('clicked');
      }}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Organisation Chart', () => {
  const tree = shallowRender(<OrgChart Users={dummyUsers} handleManagerClick={() => console.log('clicked')} />);
  expect(tree).toMatchSnapshot();
});

it('should render correctly for CheckBox', () => {
  const tree = shallowRender(
    <CustomCheckbox
      handleClick={() => {
        alert('clicked');
      }}
      title="label"
      checked={true}
      className="font-size-sm pr-1"
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Button with Icon', () => {
  const tree = shallowRender(
    <ButtonWithIcon
      title="Add to My Contacts"
      handleClick={() => {
        alert('clicked');
      }}
      imageSrc={images.addToContactsIcon}
      imageHeight={20}
      imageWidth={20}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Toast', () => {
  const tree = shallowRender(<Toast message="Added to My Contacts" variant="success" className="show" />);
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Toast', () => {
  const tree = shallowRender(<Toast message="Contact is already in My Contacts" variant="error" className="show" />);
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Error', () => {
  const tree = shallowRender(
    <Error
      backgroundImage={images.faceBrowser}
      title="Please upgrade your browser."
      message="UMG Central has detected that you are using an unsupported browser. Please use links below to download and install a supported browser."
      isShowBrowsers={true}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Error Restricted', () => {
  const tree = shallowRender(
    <Error
      backgroundImage={images.faceLockNew}
      title="Restricted Content"
      message="To access this content, please connect to the UMG Network via VPN."
      isShowBrowsers={false}
      urlText="View vpn instructions"
      urlLink="https://central.umusic.com/pages/315"
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Confirmation Modal', () => {
  const tree = shallowRender(
    <ConfirmationModal
      dialogMessage="Are you sure you want to remove this contact?"
      show={true}
      okayButtonText="Remove"
      handleClose={() => alert('clicked close')}
      handleSave={() => alert('clicked save')}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Alert Modal', () => {
  const tree = shallowRender(
    <AlertModal
      dialogMessage="Please enter both month and day for Birthday."
      show={true}
      alertButtonText="Ok"
      handleClose={() => alert('clicked close')}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('should render correctly for Partition with message', () => {
  const tree = shallowRender(<Partition message="The information below is private" />);
  expect(tree).toMatchSnapshot();
});
