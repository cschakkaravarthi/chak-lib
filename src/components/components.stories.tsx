import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { AllLinksButton } from './allLinksButton';
import { HamburgerButton } from './hamburgerButton';
import { NotificationsBadge } from './notificationsBadge';
import { SiteLogo } from './siteLogo';
import { UserBadge } from './userBadge';
import { PrimaryButton } from './primaryButton';
import { SecondaryButton } from './secondaryButton';
import { CloseButton } from './closeButton';
import { Checkbox } from './checkBox';
import { NoNotification } from './noNotification';
import { EditButton } from './editButton';
import { UploadButton } from './uploadButton';
import { CancelButton } from './cancelButton';
import { FooterFeedbackView } from './footerFeedbackView';
import { OrgChart } from './orgChart';
import { ExpandButton } from './expandButton';
import { images } from '../assets/images';
import { ContentWrapper } from './contentWrapper';
import { ThumbButton } from './thumbButton';
import { dummyUsers } from './../seeds/OrgChart.model';
import { Textbox } from './textbox';
import { CustomCheckbox } from './customCheckbox';
import { ButtonWithIcon } from './buttonWithIcon';
import { Toast } from './toast';
import { Error } from './error';
import { ConfirmationModal } from './confirmationModal';
import { AlertModal } from './alertModal';
import { DateRangeHeader } from './dateRangeHeader';
import { RejectModal } from './rejectModal';
import { Partition } from './partition';
import { Textarea } from './textarea';

export default {
  component: AllLinksButton,
  title: 'Components'
};

export const dateRangeHeader = (): JSX.Element => (
  <StoriesContainer>
    <DateRangeHeader leftTitle="From" rightTitle="Date" />
  </StoriesContainer>
);

export const allLinksButton = (): JSX.Element => (
  <StoriesContainer>
    <AllLinksButton imageSrc={images.allLinksGrid} handleClick={() => {}} />
  </StoriesContainer>
);

export const hamburgerButton = (): JSX.Element => (
  <StoriesContainer>
    <div className="dark-background p-5">
      <HamburgerButton open={false} handleClick={() => {}} />
      <HamburgerButton open={true} handleClick={() => {}} />
    </div>
  </StoriesContainer>
);

export const notificationsBadge = (): JSX.Element => (
  <StoriesContainer>
    <div className="dark-background">
      <NotificationsBadge
        handleClick={() => {
          alert('clicked');
        }}
        notificationCount={3}
      />
    </div>
  </StoriesContainer>
);

export const siteLogo = (): JSX.Element => (
  <StoriesContainer>
    <SiteLogo logoSrc={images.siteLogo} handleClick={() => alert('clicked')} />
  </StoriesContainer>
);

export const userBadge = (): JSX.Element => (
  <StoriesContainer className="bg-dark p-5">
    <UserBadge
      isFetching={true}
      fullName="Luz Lacson"
      imageUrl="https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg"
      handleClick={() => alert('clicked')}
    />
    <hr />
    <UserBadge
      className="ml-3"
      isFetching={false}
      fullName="Luz Lacson"
      imageUrl="https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg"
      handleClick={() => alert('clicked')}
    />
  </StoriesContainer>
);

export const closeButton = (): JSX.Element => (
  <StoriesContainer>
    <CloseButton
      handleClick={() => {
        alert('clicked');
      }}
    />
  </StoriesContainer>
);

export const cancelButton = (): JSX.Element => (
  <StoriesContainer>
    <CancelButton handleClick={() => alert('Cancel Button clicked')} title="Cancel Button" />
  </StoriesContainer>
);

export const primaryButton = (): JSX.Element => (
  <StoriesContainer>
    <PrimaryButton handleClick={() => alert('Primary Button clicked')} title="Primary Button" />
  </StoriesContainer>
);

export const secondaryButton = (): JSX.Element => (
  <StoriesContainer>
    <SecondaryButton handleClick={() => alert('Secondary Button clicked')} title="Secondary Button" />
  </StoriesContainer>
);

export const uploadButton = (): JSX.Element => (
  <StoriesContainer>
    <UploadButton handleClick={() => alert('Upload Button clicked')} title="Upload" uniqueIdentifier="1" />
  </StoriesContainer>
);

export const checkBox = (): JSX.Element => (
  <StoriesContainer>
    <Checkbox
      handleClick={() => {
        alert('clicked');
      }}
      title="label"
    />
  </StoriesContainer>
);

export const editButton = (): JSX.Element => (
  <StoriesContainer>
    <EditButton handleClick={() => alert('edit Button clicked')} hrefLink="https://www.google.com" />
  </StoriesContainer>
);

export const contentWrapper = (): JSX.Element => (
  <StoriesContainer>
    <ContentWrapper title="Test title">
      <p>Child prop was passed here.</p>
    </ContentWrapper>
    <hr />
    <ContentWrapper title="Test title" isFetching={true}>
      <p>The child prop is normally a component which contains it's own skeletons</p>
    </ContentWrapper>
  </StoriesContainer>
);

export const noNotification = (): JSX.Element => (
  <StoriesContainer>
    <NoNotification
      title="No new Notifications"
      backgroundImage={images.noNotification}
      message="We\'ll let you know when something pops up!"
    />
  </StoriesContainer>
);

export const footerContainer = (): JSX.Element => (
  <FooterFeedbackView
    hrefLink="https://umusic.service-now.com/assessment_take2.do?sysparm_assessable_type=ad428303db61c8d022fe96f9db9619f5"
    title="FEEDBACK"
  />
);

export const thumbButton = (): JSX.Element => (
  <StoriesContainer>
    <ThumbButton liked={false} numberOfLikes={12} handleClick={() => alert('UnLiked')} icon={images.unlikedIcon} />
    <ThumbButton liked={true} numberOfLikes={15} handleClick={() => alert('liked')} icon={images.likedIcon} />
  </StoriesContainer>
);

export const orgChart = (): JSX.Element => (
  <StoriesContainer>
    <OrgChart
      Users={dummyUsers}
      handleSubordinateClick={() => console.log('handleSubordinateClick')}
      handleManagerClick={() => console.log('handleManagerClick')}
    />
    <hr />
    <OrgChart Users={dummyUsers} isFetching={true} />
  </StoriesContainer>
);

export const expandButton = (): JSX.Element => (
  <StoriesContainer>
    <ExpandButton handleClick={() => alert('edit Button clicked')} title="Expand" />
  </StoriesContainer>
);

export const textbox = (): JSX.Element => (
  <StoriesContainer>
    <Textbox label="Name" type="text" controlId="formName" allowCheckbox={false} />
  </StoriesContainer>
);

export const textArea = (): JSX.Element => (
  <StoriesContainer>
    <Textarea
      label="Name"
      maxLength={400}
      controlId="formName"
      subLabelClass="ml-3"
      subLabel="Maximun 400 characters"
    />
  </StoriesContainer>
);

export const customCheckBox = (): JSX.Element => (
  <StoriesContainer>
    <CustomCheckbox
      handleClick={() => {
        alert('clicked');
      }}
      title="label"
      checked={true}
      className="font-size-sm pr-1"
    />
  </StoriesContainer>
);

export const buttonWithIcon = (): JSX.Element => (
  <StoriesContainer>
    <ButtonWithIcon
      title="Add to My Contacts"
      handleClick={() => {
        alert('clicked');
      }}
      imageSrc={images.addToContactsIcon}
      imageHeight={14}
      imageWidth={14}
    />
  </StoriesContainer>
);

export const settingsButton = (): JSX.Element => (
  <StoriesContainer>
    <ButtonWithIcon
      title="Settings"
      handleClick={() => {
        alert('clicked');
      }}
      imageSrc={images.gearIcon}
      imageHeight={20}
      imageWidth={20}
      labelClassName="text-upper g700-text-clr text-underlined letter-spacing-01rem"
    />
  </StoriesContainer>
);

export const toastSuccess = (): JSX.Element => (
  <StoriesContainer>
    <Toast message="Added to My Contacts" variant="success" className="show" />
  </StoriesContainer>
);

export const toastError = (): JSX.Element => (
  <StoriesContainer>
    <Toast message="Contact is already in My Contacts" variant="error" className="show" />
  </StoriesContainer>
);

export const error400 = (): JSX.Element => (
  <StoriesContainer>
    <Error
      backgroundImage={images.faceBrowser}
      title="Please upgrade your browser."
      message="UMG Central has detected that you are using an unsupported browser. Please use links below to download and install a supported browser."
      isShowBrowsers={true}
      chromeImage={images.chromeIcon}
      safariImage={images.safariIcon}
      edgeImage={images.edgeIcon}
    />
  </StoriesContainer>
);

export const error401 = (): JSX.Element => (
  <StoriesContainer>
    <Error
      backgroundImage={images.faceLock}
      title="Error 401"
      message="User is not logged in."
      isShowBrowsers={false}
    />
  </StoriesContainer>
);

export const error403 = (): JSX.Element => (
  <StoriesContainer>
    <Error backgroundImage={images.faceStop} title="Error 403" message="Forbidden content." isShowBrowsers={false} />
  </StoriesContainer>
);

export const error404 = (): JSX.Element => (
  <StoriesContainer>
    <Error
      backgroundImage={images.faceDocument}
      title="Error 404"
      message="Page or resource not found at this URL."
      isShowBrowsers={false}
    />
  </StoriesContainer>
);

export const error500 = (): JSX.Element => (
  <StoriesContainer>
    <Error
      backgroundImage={images.faceHeart}
      title="Error 500"
      message="Server error. It's not you - It's me."
      isShowBrowsers={false}
    />
  </StoriesContainer>
);

export const errorRestricted = (): JSX.Element => (
  <StoriesContainer>
    <Error
      backgroundImage={images.faceLockNew}
      title="Restricted Content"
      message="To access this content, please connect to the UMG Network via VPN."
      isShowBrowsers={false}
      urlText="View vpn instructions"
      urlLink="https://central.umusic.com/pages/315"
    />
  </StoriesContainer>
);

export const confirmationModal = (): JSX.Element => (
  <StoriesContainer>
    <ConfirmationModal
      dialogMessage="Are you sure you want to remove this contact?"
      show={true}
      okayButtonText="Remove"
      handleClose={() => alert('clicked close')}
      handleSave={() => alert('clicked save')}
    />
  </StoriesContainer>
);

export const alertModal = (): JSX.Element => (
  <StoriesContainer>
    <AlertModal
      dialogMessage="Please enter both month and day for Birthday."
      show={true}
      alertButtonText="Ok"
      handleClose={() => alert('clicked close')}
    />
  </StoriesContainer>
);

export const rejectModal = (): JSX.Element => (
  <StoriesContainer>
    <RejectModal
      dialogMessage="Please provide a reason for rejection of this request."
      show={true}
      handleClose={() => alert('clicked Close.')}
      handleReject={() => alert('clicked Reject.')}
    />
  </StoriesContainer>
);

export const partition = (): JSX.Element => (
  <StoriesContainer>
    <Partition message="The information below is private" />
  </StoriesContainer>
);
