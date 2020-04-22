import React from 'react';
import { Card } from './card';

import { images } from '../assets/images';

import StoriesContainer from '../StoriesContainer';

export default {
  component: Card,
  title: 'Cards'
};

const SINGLE_CATEGORY = {
  drupal_id: 123,
  title: 'Test'
};
const ANOTHER_SINGLE_CATEGORY = {
  drupal_id: 456,
  title: 'Another Test'
};
const MULTIPLE_CATEGORIES = [SINGLE_CATEGORY, ANOTHER_SINGLE_CATEGORY];

export const createApreciationCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      variant="create"
      type="appreciation"
      title="CREATE CARD"
      onClick={() => alert('create appreciation default clicked')}
    />
  </StoriesContainer>
);

export const appreciationCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      variant="default"
      type="appreciation"
      title="Receiver Name"
      senderName="Sender Name"
      imgTopSrc={images.apCard1}
      imgBottomSrc={images.apCard2}
      appreciationText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      onClick={() => alert('appreciation default clicked')}
    />
  </StoriesContainer>
);

export const appreciationCardThumbnail = (): JSX.Element => (
  <StoriesContainer>
    <Card
      title=""
      variant="thumbnail"
      type="appreciation"
      imgTopSrc={images.apCard1}
      imgBottomSrc={images.apCard2}
      onClick={() => alert('appreciation default clicked')}
    />
  </StoriesContainer>
);

export const appreciationCardNotification = (): JSX.Element => (
  <StoriesContainer>
    <Card
      isFetching={false}
      type="appreciation"
      variant="notification"
      title="Appreciation card notication title"
      onClick={() => alert('notification card clicked')}
    />
  </StoriesContainer>
);

export const individualPersonCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="people"
      title="Job Title"
      fullName="Daft Punk"
      variant="individual"
      MainLink={p => <a href="#">{p.children}</a>}
      imageUrl="https://consequenceofsound.net/wp-content/uploads/2015/02/screen-shot-2015-02-05-at-1-05-38-pm.png"
    />
  </StoriesContainer>
);

export const mapCard = (): JSX.Element => {
  const txtOnMap = 'universal music 2100 Colorado Ave Suite #1';
  const txt = '<p>Universal Music 2100</p><p>Colorado Ave Suite #1</p>';
  return (
    <StoriesContainer>
      <Card
        type="map"
        address={
          <div
            dangerouslySetInnerHTML={{
              __html: txt
            }}
          />
        }
        title="Address"
        topBorder="lightblue"
        addressOnMap={txtOnMap}
      />
    </StoriesContainer>
  );
};

export const articleCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      className="w-50"
      type="article"
      title="Alicia Keys Signs with Universal Music Publishing Group"
      imageUrl="https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg"
      date="July 20, 2019"
      categories={MULTIPLE_CATEGORIES}
      MainLink={p => <a href="#">{p.children}</a>}
      likes={1}
      likedStatus={true}
      fullHeight={false}
      handleThumbClick={() => alert('liked pressed')}
    />
    <hr />
    <Card className="w-50" isFetching={true} pictureSkeletonHeight={400} type="article" title="" />
  </StoriesContainer>
);

export const eventCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="event"
      className="w-50"
      isFetching={false}
      imageUrl="https://picsum.photos/500/500?grayscale"
      title="Industry Event Title"
      date="September 28, 2019"
      location="Los Angeles, CA"
      categories={MULTIPLE_CATEGORIES}
      MainLink={p => <a href="#">{p.children}</a>}
      MoreInfoLink={p => <a href="#">{p.children}</a>}
      AddToCalenderLink={p => {
        console.log(p);
      }}
    />
    <hr />
    <Card
      title=""
      type="event"
      className="w-50"
      isFetching={true}
      pictureSkeletonHeight={400}
      MoreInfoLink={p => <a href="#">{p.children}</a>}
    />
  </StoriesContainer>
);

export const articleCardFeatured = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="article"
      variant="featured"
      isFetching={false}
      pictureSkeletonHeight={350}
      title="Alicia Keys Signs with Universal Music Publishing Group"
      summary="Universal Music Publishing Group (UMPG) today announced that 15-time Grammy Award-winning artist, songwriter, and record producer Alicia Keys has been signed to an exclusive administration deal."
      imageUrl="https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg"
      date="July 20, 2019"
      categories={MULTIPLE_CATEGORIES}
      MainLink={p => <a href="#">{p.children}</a>}
      likes={1}
      likedStatus={false}
      handleThumbClick={() => alert('unliked pressed')}
    />
    <hr />

    <Card title="" type="article" variant="featured" isFetching={true} pictureSkeletonHeight={300} />
  </StoriesContainer>
);

export const articleCardFull = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="article"
      variant="full"
      title="Alicia Keys Signs with Universal Music Publishing Group"
      subtitle="UMPG to Globally Administer Rights to Alicia Keys’ Iconic Song Catalog"
      content={
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit sociis sodales, dis dictumst molestie risus.
            Habitant facilisi penatibus natoque erat ac pharetra ultricies tempor ad, eget non proin purus torquent
            aliquet enim nisl nulla, vehicula cursus inceptos eleifend sociosqu laoreet donec augue. Suspendisse fusce
            viverra commodo pellentesque feugiat nam integer rhoncus, sem quam est nulla tortor massa inceptos
            hendrerit, potenti purus sapien mus himenaeos vel molestie.
          </p>
          <p>
            Sollicitudin placerat mi dapibus urna varius class eget vulputate, tristique maecenas habitasse etiam netus
            taciti rhoncus phasellus duis, eros laoreet blandit quis ornare sociis sociosqu. Accumsan enim suspendisse
            platea donec habitant nunc sapien phasellus molestie metus cum posuere, torquent luctus vitae penatibus erat
            sagittis congue at dignissim class natoque, dictumst et curae condimentum tellus porta purus eu mi aenean
            justo. Fermentum hendrerit nisi hac tortor aliquet nibh tempor phasellus inceptos himenaeos netus, sed est
            augue dui praesent ullamcorper lectus vehicula lobortis non, metus magnis conubia potenti eu facilisis
            tincidunt a nunc volutpat.
          </p>
        </>
      }
      imageUrl="https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg"
      date="July 20, 2019"
      categories={MULTIPLE_CATEGORIES}
      MainLink={p => <a href="#">{p.children}</a>}
    />
  </StoriesContainer>
);

export const minimalCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="link"
      variant="minimal"
      title="Minimal Card"
      imageUrl="https://picsum.photos/500/500"
      MainLink={p => <a href="#">{p.children}</a>}
    />
  </StoriesContainer>
);

export const eventCardFull = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="event"
      variant="full"
      title="2019 CMA Awards Nominations Announced"
      subtitle="Brothers Osborne Lead UMG Artists with Four Nominations"
      location="Venue name, Los Angeles, ca"
      content={
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit sociis sodales, dis dictumst molestie risus.
            Habitant facilisi penatibus natoque erat ac pharetra ultricies tempor ad, eget non proin purus torquent
            aliquet enim nisl nulla, vehicula cursus inceptos eleifend sociosqu laoreet donec augue. Suspendisse fusce
            viverra commodo pellentesque feugiat nam integer rhoncus, sem quam est nulla tortor massa inceptos
            hendrerit, potenti purus sapien mus himenaeos vel molestie.
          </p>
          <p>
            Sollicitudin placerat mi dapibus urna varius class eget vulputate, tristique maecenas habitasse etiam netus
            taciti rhoncus phasellus duis, eros laoreet blandit quis ornare sociis sociosqu. Accumsan enim suspendisse
            platea donec habitant nunc sapien phasellus molestie metus cum posuere, torquent luctus vitae penatibus erat
            sagittis congue at dignissim class natoque, dictumst et curae condimentum tellus porta purus eu mi aenean
            justo. Fermentum hendrerit nisi hac tortor aliquet nibh tempor phasellus inceptos himenaeos netus, sed est
            augue dui praesent ullamcorper lectus vehicula lobortis non, metus magnis conubia potenti eu facilisis
            tincidunt a nunc volutpat.
          </p>
        </>
      }
      imageUrl="https://picsum.photos/500/300"
      date="Aug 28, 2019, 8:00PM – Aug 29, 2019, 10:00PM"
      categories={MULTIPLE_CATEGORIES}
      MainLink={p => <a href="#">{p.children}</a>}
    />
  </StoriesContainer>
);

export const departmentCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="department"
      variant="standard"
      title="Communications"
      sectionIcon={images.sectionIcon1}
      bodyContent={
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      }
      VisitLink={p => <a href="#">{p.children}</a>}
    />
    <hr />
    <Card
      isFetching={true}
      type="department"
      variant="standard"
      title="hola"
      sectionIcon={images.sectionIcon1}
      bodyContent={<p>...</p>}
      VisitLink={p => <a href="#">{p.children}</a>}
    />
  </StoriesContainer>
);

export const employeeServCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="employeeServ"
      variant="standard"
      title="Training"
      imageUrl="https://picsum.photos/500/500?grayscale"
      summary="Nam non sem vel urna porta tempor at eu dui. Cras ac eros consectetur, pharetra ipsum quis, laoreet velit."
      VisitLink={p => <a href="#">{p.children}</a>}
      linkText="BACKSTAGE"
    />
  </StoriesContainer>
);

export const notificationCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      isArchive={false}
      isApprove={false}
      categories={MULTIPLE_CATEGORIES}
      variant="standard"
      type="notification"
      notificationType="maintenence"
      dateTime="October 23, 2019 16:28 PM PDT"
      title="Emergency Alert - Los Angeles Area Earthquake"
      body_full="Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests."
      body_summary="Global Communications oversees all aspects of external and internal communications"
      drupal_id={518}
      onArchive={(drupal_id: number | undefined) => alert(drupal_id)}
    />
    <hr />
    <Card
      isFetching={true}
      categories={MULTIPLE_CATEGORIES}
      variant="standard"
      type="notification"
      notificationType="maintenence"
      dateTime="October 23, 2019 16:28 PM PDT"
      title="Emergency Alert - Los Angeles Area Earthquake"
      body_full="Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests."
      body_summary="Global Communications oversees all aspects of external and internal communications"
      drupal_id={518}
      onArchive={(drupal_id: number | undefined) => alert(drupal_id)}
    />
  </StoriesContainer>
);

export const approvalNotificationCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      isArchive={false}
      isApprove={true}
      serviceNowLink="https://umusicdev.service-now.com/ess/task_status.do?view=approvals"
      categories={[
        {
          drupal_id: 123,
          title: 'UMG IT'
        }
      ]}
      variant="standard"
      type="notification"
      notificationType="approval"
      dateTime="October 23, 2019 16:28 PM PDT"
      title="Requested Item: RITM0085038 - ₨0.00 - Anumothu Rajendran"
      body_full="Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests."
      body_summary="Global Communications oversees all aspects of external and internal communications"
      drupal_id={518}
      onApprove={(drupal_id: number | undefined) => alert(drupal_id)}
      onReject={(drupal_id: number | undefined) => alert(drupal_id)}
    />
  </StoriesContainer>
);

export const eventCardList = (): JSX.Element => (
  <StoriesContainer>
    <Card
      title="Events"
      isFetching={false}
      topBorder="yellow"
      variant="standard"
      type="cardsInContainer"
      headerLinkText="All Events"
      HeaderLink={p => <a href="#">{p.children}</a>}
      AddToCalenderLink={p => {
        console.log(p);
      }}
    >
      {[
        <Card
          isFetching={false}
          type="event"
          title="Industry Event Title"
          variant="embedded"
          date="September 28, 2019"
          location="Los Angeles, CA"
          categories={MULTIPLE_CATEGORIES}
          MainLink={p => <a href="#">{p.children}</a>}
          AddToCalenderLink={p => {
            console.log(p);
          }}
        />,
        <Card
          isFetching={false}
          type="event"
          variant="embedded"
          title="UMG Event with an Even Longer Title"
          date="September 28, 2019"
          location="Woodland Hills, CA"
          categories={MULTIPLE_CATEGORIES}
          MainLink={p => <a href="#">{p.children}</a>}
          AddToCalenderLink={p => {
            console.log(p);
          }}
        />
      ]}
    </Card>
  </StoriesContainer>
);

export const eventCardEmbedded = (): JSX.Element => (
  <StoriesContainer>
    <hr />
    <p>
      * This component by itself is very simple. It has no borders. Its purpose is to be used on a list wrapped by a
      container
    </p>
    <hr className="mb-5" />
    <Card
      type="event"
      title="Industry Event Title"
      variant="embedded"
      date="September 28, 2019"
      location="Los Angeles, CA"
      categories={MULTIPLE_CATEGORIES}
      MainLink={p => <a href="#">{p.children}</a>}
      AddToCalenderLink={p => {
        console.log(p);
      }}
    />
    <hr className="mt-5" />
    <p>
      * See the component below to catch a better example or refer to the component in the story book, named: Event Card
      List
    </p>
    <hr className="mb-5" />
    {eventCardList()}
  </StoriesContainer>
);

export const cardsListsContainer = (): JSX.Element => (
  <StoriesContainer>
    <hr />
    <p>* Any type of card could be used here as a child.</p>
    <hr className="mb-5" />
    <Card
      variant="standard"
      type="cardsInContainer"
      title="New notifications"
      MainLink={p => <a href="#">{p.children}</a>}
    >
      {[
        <Card
          isNew={true}
          categories={MULTIPLE_CATEGORIES}
          variant="standard"
          type="notification"
          notificationType="maintenence"
          dateTime="October 23, 2019 16:28 PM PDT"
          title="Emergency Alert - Los Angeles Area Earthquake"
          MainLink={p => <a href="#">{p.children}</a>}
          summary="Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests."
        />,
        <Card
          isNew={false}
          categories={MULTIPLE_CATEGORIES}
          variant="standard"
          type="notification"
          notificationType="alert"
          dateTime="October 23, 2019 16:28 PM PDT"
          title="Emergency Alert - Los Angeles Area Earthquake"
          MainLink={p => <a href="#">{p.children}</a>}
          summary="Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests."
        />
      ]}
    </Card>
  </StoriesContainer>
);

export const peopleCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="people"
      variant="profile"
      imageUrl="https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg"
      title="Sr. Director, Business Process Management"
      department="Royalties IT"
      companyName="Company Name"
      location="Woodland Hills, CA"
      center="USIC"
      desk="1A"
      handleChangePhoto={() => alert('changephoto clicked')}
      isUploading={false}
      isCurrentUser={true}
      handleDeletePhoto={() => alert('deletephoto clicked')}
      hasProfilePhoto={true}
    />
    <hr />
    <Card
      isFetching={true}
      type="people"
      variant="profile"
      imageUrl="https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg"
      title="Sr. Director, Business Process Management"
      department="Royalties IT"
      companyName="Company Name"
      location="Woodland Hills, CA"
      center="USIC"
      desk="1A"
      handleChangePhoto={() => alert('changephoto clicked')}
      isUploading={false}
      isCurrentUser={true}
      handleDeletePhoto={() => alert('deletephoto clicked')}
      hasProfilePhoto={true}
    />
  </StoriesContainer>
);

export const contactMeCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="contactMe"
      variant="standard"
      isFetching={false}
      title="Contact Me"
      office="818.212.0897"
      mobile="818.264.4243"
      email="luz.lacson@umusic.com"
      isCurrentUser={true}
      addToContactImage={images.addToContactsIcon}
      handleClick={() => alert('edit button clicked')}
      handleAddToContacts={() => alert('add to contacts clicked')}
    />
    <hr />
    <Card
      type="contactMe"
      variant="standard"
      isFetching={false}
      title="Contact Me"
      office="818.212.0897"
      mobile="818.264.4243"
      email="luz.lacson@umusic.com"
      isCurrentUser={false}
      addToContactImage={images.addToContactsIcon}
      handleClick={() => alert('edit button clicked')}
      handleAddToContacts={() => alert('add to contacts clicked')}
    />
    <hr />
    <Card
      isFetching={true}
      type="contactMe"
      variant="standard"
      title="Contact Me"
      office="818.212.0897"
      mobile="818.264.4243"
      isCurrentUser={false}
      email="luz.lacson@umusic.com"
      addToContactImage={images.addToContactsIcon}
      handleClick={() => alert('edit button clicked')}
      handleAddToContacts={() => alert('add to contacts clicked')}
    />
  </StoriesContainer>
);

export const myContacts = (): JSX.Element => (
  <StoriesContainer>
    <Card
      isFetching={false}
      type="contactMe"
      variant="profile"
      title="First Lastname"
      office="818.212.0897"
      mobile="818.264.4243"
      email="first.lastname@umusic.com"
      handleClick={() => alert('close button clicked')}
      contactPic="https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg"
      isCurrentUser={false}
      LinkToProfile={p => <a href="#">{p.children}</a>}
    />
    <hr />
    <Card
      isFetching={true}
      type="contactMe"
      variant="profile"
      title="First Lastname"
      office="818.212.0897"
      mobile="818.264.4243"
      email="first.lastname@umusic.com"
      handleClick={() => alert('close button clicked')}
      LinkToProfile={p => <a href="#">{p.children}</a>}
      contactPic="https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg"
      isCurrentUser={false}
    />
  </StoriesContainer>
);

export const getToKnowMeCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      isFetching={false}
      type="getToKnowMe"
      variant="standard"
      title="Get to know me"
      nickname="Chi"
      birthDay="13"
      birthMonth="January"
      anniversaryMonth="July"
      anniversaryDay="1"
      languagesSpoken="English, Spanish"
      professionalSkills={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
      }
      currentlyWorking="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      aboutMe="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      handleClick={() => alert('edit button clicked')}
      isCurrentUser={false}
    />
    <hr />
    <Card
      isFetching={true}
      type="getToKnowMe"
      variant="standard"
      title="Get to know me"
      nickname="Chi"
      birthDay="13"
      birthMonth="January"
      anniversaryMonth="July"
      anniversaryDay="1"
      languagesSpoken="English, Spanish"
      professionalSkills={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
      }
      currentlyWorking="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      aboutMe="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      handleClick={() => alert('edit button clicked')}
      isCurrentUser={true}
    />
  </StoriesContainer>
);

const dummyImg = 'https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg';

export const minimalNewsList = (): JSX.Element => (
  <StoriesContainer>
    <Card title="News" type="article" variant="newsList" topBorder="lightblue">
      {[
        <Card
          type="article"
          imageUrl={dummyImg}
          variant="newsListEmbedded"
          date="September 28, 2019"
          title="Industry article Title"
          MainLink={p => <a href="#">{p.children}</a>}
        />,
        <Card
          type="article"
          imageUrl={dummyImg}
          date="September 28, 2019"
          variant="newsListEmbedded"
          MainLink={p => <a href="#">{p.children}</a>}
          title="UMG Event with an Even Longer Title"
        />
      ]}
    </Card>
  </StoriesContainer>
);

export const minimalNewsEmbedded = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="article"
      imageUrl={dummyImg}
      variant="newsListEmbedded"
      date="September 28, 2019"
      title="Industry article Title"
      MainLink={p => <a href="#">{p.children}</a>}
    />
  </StoriesContainer>
);

export const OfficesList = (): JSX.Element => {
  const officeData = [
    {
      placeName: 'New York',
      officeList: [
        {
          drupal_id: 11,
          title: 'Office Name',
          address: '21301 burbank blvdWoodland hills, CA'
        },
        {
          drupal_id: 12,
          title: 'Office Name',
          address: '21301 burbank blvdWoodland hills, CA'
        }
      ],
      categType: 'office'
    },
    {
      drupal_id: 2,
      placeName: 'Asia',
      officeList: [
        {
          drupal_id: 21,
          title: 'Office Name',
          address: '21301 burbank blvdWoodland hills, CA'
        },
        {
          drupal_id: 22,
          title: 'Office Name',
          address: '21301 burbank blvdWoodland hills, CA'
        }
      ],
      categType: 'office'
    },
    {
      drupal_id: 3,
      placeName: 'North America',
      officeList: [
        {
          drupal_id: 31,
          title: 'Office Name',
          address: '21301 burbank blvdWoodland hills, CA'
        },
        {
          drupal_id: 32,
          title: 'Office Name',
          address: '21301 burbank blvdWoodland hills, CA'
        }
      ],
      categType: 'office'
    },
    {
      drupal_id: 4,
      placeName: 'Europe',
      officeList: [
        {
          drupal_id: 4,
          title: 'Office Name',
          address: '21301 burbank blvdWoodland hills, CA'
        },
        {
          drupal_id: 4,
          title: 'Office Name',
          address: '21301 burbank blvdWoodland hills, CA'
        }
      ],
      categType: 'office'
    }
  ];
  return (
    <StoriesContainer>
      <Card
        title=""
        variant="light"
        type="officesListContainer"
        officeData={officeData}
        VisitLink={p => <a href="#">{p.children}</a>}
      />
    </StoriesContainer>
  );
};

export const knowledgeBaseSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      isFetching={false}
      type="knowledgeBase"
      variant="search"
      title="Brand Article"
      date="January 1,2019"
      authorName="Author Name"
      searchSummary={
        <>
          <p>Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      searchKeyword="rticl"
    />
    <hr />
    <Card title="" variant="search" isFetching={true} type="knowledgeBase" />
  </StoriesContainer>
);

export const techCatalogSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="techCatalog"
      variant="search"
      title="Product Title"
      searchSummary={
        <>
          <p>Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      searchKeyword="Title"
    />
    <hr />
    <Card title="" variant="search" isFetching={true} type="techCatalog" />
  </StoriesContainer>
);

export const linkSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="link"
      variant="search"
      title="Branding & Style Guide"
      imageSrc={images.external}
      searchSummary={
        <>
          <p>Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      searchKeyword="Guide"
    />
    <hr />
    <Card title="" type="link" variant="search" isFetching={true} />
  </StoriesContainer>
);

export const documentSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="document"
      variant="search"
      title="Document Title"
      searchSummary={
        <>
          <p>Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      searchKeyword="Title"
    />
    <hr />
    <Card title="" type="document" variant="search" isFetching={true} />
  </StoriesContainer>
);

export const departmentSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="department"
      variant="search"
      title="Brand Department"
      searchSummary={
        <>
          <p>Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      searchKeyword="part"
    />
    <hr />
    <Card title="" isFetching={true} type="department" variant="search" />
  </StoriesContainer>
);

export const officeSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="office"
      variant="search"
      title="Woodland Hills"
      officeAddress={
        <>
          <p>21301 Burbank Blvd</p>
          <p>Woodland Hills, CA 91367</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      searchKeyword="land"
    />
    <hr />
    <Card title="" type="office" variant="search" isFetching={true} />
  </StoriesContainer>
);

export const pageSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="page"
      variant="search"
      title="Page Title"
      departmentName="Department Name"
      searchSummary={
        <>
          <p>Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      searchKeyword="Title"
    />
    <hr />
    <Card title="" type="page" variant="search" isFetching={true} />
  </StoriesContainer>
);

export const brandsLabelsCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="brands"
      variant="default"
      imageUrl="https://i.ibb.co/zxcfjbG/bravado.png"
      title="Bravado"
      url="https://bravado.com"
    />
  </StoriesContainer>
);

export const peopleSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="people"
      variant="search"
      isFetching={false}
      imageUrl="https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg"
      title="Brandon Smith"
      designation="Designation"
      department="Job Title, Department"
      companyName="Company Name"
      workLocation="Woodland Hills, CA, USA"
      mail="brandon.smith@umusic.com"
      MainLink={p => <a href="#">{p.children}</a>}
      ZoomLink={p => <a href="#">{p.children}</a>}
      MailLink={p => <a href="#">{p.children}</a>}
      isCurrentUser={false}
      handleAddToContacts={() => alert('clicked add to contacts')}
      addToContactIcon={images.addToContactsIcon}
      searchKeyword="bran"
    />
    <hr />
    <Card title="" type="people" variant="search" isFetching={true} />
  </StoriesContainer>
);

export const articleSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="article"
      variant="search"
      title="Brand Article"
      content={
        <>
          <p>Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae article cumque.</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      searchKeyword="rti"
    />
    <hr />
    <Card isFetching={true} title="" type="article" variant="search" />
  </StoriesContainer>
);

export const eventSearchCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="event"
      date="March 16, 2020"
      location="Indio, California"
      variant="search"
      title="Brand Article"
      content={
        <>
          <p>Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae article cumque.</p>
        </>
      }
      MainLink={p => <a href="#">{p.children}</a>}
      MoreInfoLink={p => <a href="#">{p.children}</a>}
      searchKeyword="rti"
    />
    <hr />
    <Card isFetching={true} title="" type="event" variant="search" />
  </StoriesContainer>
);

export const SystemAndApplicationCard = (): JSX.Element => (
  <StoriesContainer>
    <Card
      type="systemAndApplication"
      variant="standard"
      title="AirBnb for Work"
      bodySummary="Financial reporting system How it works: SAP BI receives financial data from SAP FICO & other sales systems. This data is then reported in multiple different ways to HFM for corporate reporting, reporting by Repertory owner, by product type, etc. Reporting module of SAP, used by finance community via an Excel plugin. This application is also the bridge between SAP Finance and Hyperion HFM. Benefits: One single centralized financial reporting system which collects all reporting data from various source & sends to corporate reporting system HFM. SAP BI system is used to report UMG monthly profit/loss to corporate."
      technicalContactName="First Lastname"
      businessOwnerName="First Lastname"
      appOwnerName="First Lastname"
      url="https://www.google.com"
      appOwnerEmail="abc@xyz.com"
      businessOwnerEmail="abc@xyz.com"
      technicalContactEmail="abc@xyz.com"
    />
    <hr />
    <Card isFetching={true} title="" type="systemAndApplication" variant="standard" />
  </StoriesContainer>
);
