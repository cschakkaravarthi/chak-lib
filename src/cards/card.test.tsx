import React from 'react';
import { shallowRender } from '../services/testHelper';
import { Card } from './card';
import { images } from '../assets/images';

const singleCategory = {
  drupal_id: 123,
  title: 'Test'
};
const anotherSingleCategory = {
  drupal_id: 456,
  title: 'Another Test'
};
const MULTIPLE_CATEGORIES = [singleCategory, anotherSingleCategory];

describe('Card', () => {
  it('should render correctly for type appreciation and variant create', () => {
    const tree = shallowRender(
      <Card
        variant="create"
        type="appreciation"
        title="CREATE CARD"
        onClick={() => alert('create appreciation default clicked')}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type appreciation and variant notification', () => {
    const tree = shallowRender(
      <Card
        type="appreciation"
        variant="notification"
        title="Appreciation card notication title"
        onClick={() => alert('notification card clicked')}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type Article', () => {
    const tree = shallowRender(
      <Card
        type="article"
        title="Alicia Keys Signs with Universal Music Publishing Group"
        imageUrl="https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg"
        date="July 20, 2019"
        categories={MULTIPLE_CATEGORIES}
        MainLink={p => <a href="#">{p.children}</a>}
        likes={1}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type Article search', () => {
    const tree = shallowRender(
      <Card
        type="article"
        variant="search"
        title="Alicia Keys Signs with Universal Music Publishing Group"
        content={
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipiscing elit sociis
              sodales, dis dictumst molestie risus. Habitant facilisi penatibus
              natoque erat ac pharetra ultricies tempor ad, eget non proin purus
              torquent aliquet enim nisl nulla, vehicula cursus inceptos
              eleifend sociosqu laoreet donec augue. Suspendisse fusce viverra
              commodo pellentesque feugiat nam integer rhoncus, sem quam est
              nulla tortor massa inceptos hendrerit, potenti purus sapien mus
              himenaeos vel molestie.
            </p>
            <p>
              Sollicitudin placerat mi dapibus urna varius class eget vulputate,
              tristique maecenas habitasse etiam netus taciti rhoncus phasellus
              duis, eros laoreet blandit quis ornare sociis sociosqu. Accumsan
              enim suspendisse platea donec habitant nunc sapien phasellus
              molestie metus cum posuere, torquent luctus vitae penatibus erat
              sagittis congue at dignissim class natoque, dictumst et curae
              condimentum tellus porta purus eu mi aenean justo. Fermentum
              hendrerit nisi hac tortor aliquet nibh tempor phasellus inceptos
              himenaeos netus, sed est augue dui praesent ullamcorper lectus
              vehicula lobortis non, metus magnis conubia potenti eu facilisis
              tincidunt a nunc volutpat.
            </p>
          </>
        }
        MainLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type Article and variant featured', () => {
    const tree = shallowRender(
      <Card
        type="article"
        variant="featured"
        title="Alicia Keys Signs with Universal Music Publishing Group"
        summary="Universal Music Publishing Group (UMPG) today announced that 15-time Grammy Award-winning artist, songwriter, and record producer Alicia Keys has been signed to an exclusive administration deal."
        imageUrl="https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg"
        date="July 20, 2019"
        categories={MULTIPLE_CATEGORIES}
        MainLink={p => <a href="#">{p.children}</a>}
        likes={1}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type Article and variant full', () => {
    const tree = shallowRender(
      <Card
        type="article"
        variant="full"
        title="Alicia Keys Signs with Universal Music Publishing Group"
        subtitle="UMPG to Globally Administer Rights to Alicia Keys’ Iconic Song Catalog"
        content={
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipiscing elit sociis
              sodales, dis dictumst molestie risus. Habitant facilisi penatibus
              natoque erat ac pharetra ultricies tempor ad, eget non proin purus
              torquent aliquet enim nisl nulla, vehicula cursus inceptos
              eleifend sociosqu laoreet donec augue. Suspendisse fusce viverra
              commodo pellentesque feugiat nam integer rhoncus, sem quam est
              nulla tortor massa inceptos hendrerit, potenti purus sapien mus
              himenaeos vel molestie.
            </p>
            <p>
              Sollicitudin placerat mi dapibus urna varius class eget vulputate,
              tristique maecenas habitasse etiam netus taciti rhoncus phasellus
              duis, eros laoreet blandit quis ornare sociis sociosqu. Accumsan
              enim suspendisse platea donec habitant nunc sapien phasellus
              molestie metus cum posuere, torquent luctus vitae penatibus erat
              sagittis congue at dignissim class natoque, dictumst et curae
              condimentum tellus porta purus eu mi aenean justo. Fermentum
              hendrerit nisi hac tortor aliquet nibh tempor phasellus inceptos
              himenaeos netus, sed est augue dui praesent ullamcorper lectus
              vehicula lobortis non, metus magnis conubia potenti eu facilisis
              tincidunt a nunc volutpat.
            </p>
          </>
        }
        imageUrl="https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg"
        date="July 20, 2019"
        categories={MULTIPLE_CATEGORIES}
        MainLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type event', () => {
    const tree = shallowRender(
      <Card
        type="event"
        imageUrl="https://picsum.photos/500/500?grayscale"
        title="Industry Event Title"
        date="September 28, 2019"
        location="Los Angeles, CA"
        categories={MULTIPLE_CATEGORIES}
        MainLink={p => <a href="#">{p.children}</a>}
        MoreInfoLink={p => <a href="#">{p.children}</a>}
        AddToCalenderLink={() => {
          alert('clicked');
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type eventcard full', () => {
    const tree = shallowRender(
      <Card
        type="event"
        variant="full"
        title="2019 CMA Awards Nominations Announced"
        subtitle="Brothers Osborne Lead UMG Artists with Four Nominations"
        location="Venue name, Los Angeles, ca"
        content={
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipiscing elit sociis
              sodales, dis dictumst molestie risus. Habitant facilisi penatibus
              natoque erat ac pharetra ultricies tempor ad, eget non proin purus
              torquent aliquet enim nisl nulla, vehicula cursus inceptos
              eleifend sociosqu laoreet donec augue. Suspendisse fusce viverra
              commodo pellentesque feugiat nam integer rhoncus, sem quam est
              nulla tortor massa inceptos hendrerit, potenti purus sapien mus
              himenaeos vel molestie.
            </p>
            <p>
              Sollicitudin placerat mi dapibus urna varius class eget vulputate,
              tristique maecenas habitasse etiam netus taciti rhoncus phasellus
              duis, eros laoreet blandit quis ornare sociis sociosqu. Accumsan
              enim suspendisse platea donec habitant nunc sapien phasellus
              molestie metus cum posuere, torquent luctus vitae penatibus erat
              sagittis congue at dignissim class natoque, dictumst et curae
              condimentum tellus porta purus eu mi aenean justo. Fermentum
              hendrerit nisi hac tortor aliquet nibh tempor phasellus inceptos
              himenaeos netus, sed est augue dui praesent ullamcorper lectus
              vehicula lobortis non, metus magnis conubia potenti eu facilisis
              tincidunt a nunc volutpat.
            </p>
          </>
        }
        imageUrl="https://picsum.photos/500/300"
        date="Aug 28, 2019, 8:00PM – Aug 29, 2019, 10:00PM"
        categories={MULTIPLE_CATEGORIES}
        MainLink={p => <a href="#">{p.children}</a>}
        AddToCalenderLink={() => {
          alert('clicked');
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for department card', () => {
    const tree = shallowRender(
      <Card
        type="department"
        variant="standard"
        title="Communications"
        summary="Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests."
        VisitLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for notification card', () => {
    const tree = shallowRender(
      <Card
        isNew={true}
        categories={MULTIPLE_CATEGORIES}
        variant="standard"
        type="notification"
        notificationType="maintenence"
        dateTime="October 23, 2019 16:28 PM PDT"
        title="Emergency Alert - Los Angeles Area Earthquake"
        summary="Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests."
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for Events list card', () => {
    const tree = shallowRender(
      <Card
        title="Events"
        topBorder="yellow"
        variant="standard"
        type="cardsInContainer"
        headerLinkText="All Events"
        HeaderLink={p => <a href="#">{p.children}</a>}
      >
        {[
          <Card
            type="event"
            title="Industry Event Title"
            variant="embedded"
            date="September 28, 2019"
            location="Los Angeles, CA"
            categories={MULTIPLE_CATEGORIES}
            MainLink={p => <a href="#">{p.children}</a>}
            AddToCalenderLink={() => {
              alert('clicked');
            }}
          />,
          <Card
            type="event"
            variant="embedded"
            title="UMG Event with an Even Longer Title"
            date="September 28, 2019"
            location="Woodland Hills, CA"
            categories={MULTIPLE_CATEGORIES}
            MainLink={p => <a href="#">{p.children}</a>}
            AddToCalenderLink={() => {
              alert('clicked');
            }}
          />
        ]}
      </Card>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for Events card list embedded', () => {
    const tree = shallowRender(
      <Card
        type="event"
        title="Industry Event Title"
        variant="embedded"
        date="September 28, 2019"
        location="Los Angeles, CA"
        categories={MULTIPLE_CATEGORIES}
        MainLink={p => <a href="#">{p.children}</a>}
        AddToCalenderLink={() => {
          alert('clicked');
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for Events search card ', () => {
    const tree = shallowRender(
      <Card
        type="event"
        title="Industry Event Title"
        variant="search"
        date="September 28, 2019"
        location="Los Angeles, CA"
        MainLink={p => <a href="#">{p.children}</a>}
        AddToCalenderLink={() => {
          alert('clicked');
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for card list container', () => {
    const tree = shallowRender(
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
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly for Peoples search card', () => {
    const tree = shallowRender(
      <Card
        title="test title"
        type="people"
        variant="search"
        imageUrl="test url"
        designation="software developer"
        companyName="UMG"
        workLocation="Woodland Hills, LA"
        mail="testusser@umusic.com"
        MailLink={p => <a href="#">{p.children}</a>}
        ZoomLink={p => <a href="#">{p.children}</a>}
        MainLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly for Department card', () => {
    const tree = shallowRender(
      <Card
        type="department"
        variant="standard"
        title="Communications"
        summary="Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests."
        VisitLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly for Service card', () => {
    const tree = shallowRender(
      <Card
        type="employeeServ"
        variant="standard"
        title="Training"
        imageUrl="https://picsum.photos/500/500?grayscale"
        summary="Nam non sem vel urna porta tempor at eu dui. Cras ac eros consectetur, pharetra ipsum quis, laoreet velit."
        VisitLink={p => <a href="#">{p.children}</a>}
        linkText="BACKSTAGE"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type Seach no result', () => {
    const tree = shallowRender(
      <Card
        type="search"
        variant="noResult"
        title="NEWS"
        description="Browse the latest news regarding artist, UMG events, and UMG news."
        MainLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly the minimal card', () => {
    const tree = shallowRender(
      <Card
        type="link"
        variant="minimal"
        title="Minimal Card"
        imageUrl="https://picsum.photos/500/500"
        MainLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly for Peoples profile card', () => {
    const tree = shallowRender(
      <Card
        type="people"
        variant="profile"
        imageUrl="https://media.licdn.com/dms/image/C4D03AQHgxarEg1Cvuw/ profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta& t=thBaLX-J3-MoHdpJ3MvombNd4LOKfMHNRPLlmopM6KI"
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
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly for contacts card', () => {
    const tree = shallowRender(
      <Card
        type="contactMe"
        variant="standard"
        title="Contact Me"
        office="818.212.0897"
        mobile="818.264.4243"
        email="luz.lacson@umusic.com"
        handleClick={() => alert('edit button clicked')}
        isCurrentUser={true}
        addToContactImage={images.addToContactsIcon}
        handleAddToContacts={() => {
          alert('clicked');
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly for my contacts card', () => {
    const tree = shallowRender(
      <Card
        type="contactMe"
        variant="profile"
        title="First Lastname"
        office="818.212.0897"
        mobile="818.264.4243"
        email="first.lastname@umusic.com"
        handleClick={() => alert('close button clicked')}
        contactPic="https://media.licdn.com/dms/image/C4D03AQHgxarEg1Cvuw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=thBaLX-J3-MoHdpJ3MvombNd4LOKfMHNRPLlmopM6KI"
        isCurrentUser={false}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly for get to know me card', () => {
    const tree = shallowRender(
      <Card
        type="getToKnowMe"
        variant="standard"
        title="Get to know me"
        nickname="Chi"
        birthDay="13"
        birthMonth="January"
        anniversaryMonth="July"
        anniversaryDay="1"
        languagesSpoken="English, Spanish"
        professionalSkills="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        currentlyWorking="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        aboutMe="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        handleClick={() => alert('edit button clicked')}
        isCurrentUser={false}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly the minimal news list card', () => {
    const tree = shallowRender(
      <Card
        title="News"
        type="article"
        variant="newsList"
        topBorder="lightblue"
      >
        {[
          <Card
            type="article"
            variant="newsListEmbedded"
            date="September 28, 2019"
            imageUrl="https://picsum.photos/500/500"
            title="Industry article Title"
            MainLink={p => <a href="#">{p.children}</a>}
          />,
          <Card
            type="article"
            date="September 28, 2019"
            variant="newsListEmbedded"
            imageUrl="https://picsum.photos/500/500"
            MainLink={p => <a href="#">{p.children}</a>}
            title="UMG Event with an Even Longer Title"
          />
        ]}
      </Card>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly the map card', () => {
    const txtOnMap = '21301 Burbank Blvd Woodland Hills CA 91367';
    const txt = '<p>21301 Burbank Blvd</p><p>Woodland Hills CA 91367</p>';
    const tree = shallowRender(
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
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly individual person card', () => {
    const tree = shallowRender(
      <Card
        type="people"
        title="Job Title"
        fullName="Daft Punk"
        variant="individual"
        MainLink={p => <a href="#">{p.children}</a>}
        imageUrl="https://consequenceofsound.net/wp-content/uploads/2015/02/screen-shot-2015-02-05-at-1-05-38-pm.png"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly the news embedded card', () => {
    const tree = shallowRender(
      <Card
        type="article"
        variant="newsListEmbedded"
        date="September 28, 2019"
        title="Industry article Title"
        imageUrl="https://picsum.photos/500/500"
        MainLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly the offices list card', () => {
    const officeData = [
      {
        placeName: 'New York',
        officeList: [
          {
            title: 'Office Name',
            address: '21301 burbank blvdWoodland hills, CA'
          },
          {
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
            title: 'Office Name',
            address: '21301 burbank blvdWoodland hills, CA'
          },
          {
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
            title: 'Office Name',
            address: '21301 burbank blvdWoodland hills, CA'
          },
          {
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
            title: 'Office Name',
            address: '21301 burbank blvdWoodland hills, CA'
          },
          {
            title: 'Office Name',
            address: '21301 burbank blvdWoodland hills, CA'
          }
        ],
        categType: 'office'
      }
    ];
    const tree = shallowRender(
      <Card
        title=""
        variant="light"
        officeData={officeData}
        type="officesListContainer"
        VisitLink={p => <a href="#">{p.children}</a>}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type knowledge base search card', () => {
    const tree = shallowRender(
      <Card
        type="knowledgeBase"
        variant="search"
        title="Brand Article"
        date="January 1,2019"
        authorName="Author Name"
        searchSummary={
          <>
            <p>
              Quam minima autem volupytatem ut optio set distintio quae. Atque
              quidem beatae cumque.
            </p>
          </>
        }
        MainLink={p => <a href="#">{p.children}</a>}
        searchKeyword="rticl"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type tech catalog search card', () => {
    const tree = shallowRender(
      <Card
        type="techCatalog"
        variant="search"
        title="Product Title"
        rate="$99.99"
        searchSummary={
          <>
            <p>
              Quam minima autem volupytatem ut optio set distintio quae. Atque
              quidem beatae cumque.
            </p>
          </>
        }
        MainLink={p => <a href="#">{p.children}</a>}
        searchKeyword="Title"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type link search card', () => {
    const tree = shallowRender(
      <Card
        type="link"
        variant="search"
        title="Branding & Style Guide"
        imageSrc="'https://media.licdn.com/dms/image/C4D03AQHgxarEg1Cvuw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=thBaLX-J3-MoHdpJ3MvombNd4LOKfMHNRPLlmopM6KI'"
        searchSummary={
          <>
            <p>
              Quam minima autem volupytatem ut optio set distintio quae. Atque
              quidem beatae cumque.
            </p>
          </>
        }
        MainLink={p => <a href="#">{p.children}</a>}
        searchKeyword="Guide"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type document search card', () => {
    const tree = shallowRender(
      <Card
        type="document"
        variant="search"
        title="Document Title"
        searchSummary={
          <>
            <p>
              Quam minima autem volupytatem ut optio set distintio quae. Atque
              quidem beatae cumque.
            </p>
          </>
        }
        MainLink={p => <a href="#">{p.children}</a>}
        searchKeyword="Title"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type department search card', () => {
    const tree = shallowRender(
      <Card
        type="department"
        variant="search"
        title="Brand Department"
        searchSummary={
          <>
            <p>
              Quam minima autem volupytatem ut optio set distintio quae. Atque
              quidem beatae cumque.
            </p>
          </>
        }
        MainLink={p => <a href="#">{p.children}</a>}
        searchKeyword="part"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type office search card', () => {
    const tree = shallowRender(
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
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type page search card', () => {
    const tree = shallowRender(
      <Card
        type="page"
        variant="search"
        title="Page Title"
        departmentName="Department Name"
        searchSummary={
          <>
            <p>
              Quam minima autem volupytatem ut optio set distintio quae. Atque
              quidem beatae cumque.
            </p>
          </>
        }
        MainLink={p => <a href="#">{p.children}</a>}
        searchKeyword="Title"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type people search card', () => {
    const tree = shallowRender(
      <Card
        type="people"
        variant="search"
        imageUrl="https://media.licdn.com/dms/image/C4D03AQHgxarEg1Cvuw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=thBaLX-J3-MoHdpJ3MvombNd4LOKfMHNRPLlmopM6KI"
        title="Brandon Smith"
        department="Job Title, Department"
        designation="Designation"
        companyName="Company Name"
        workLocation="Woodland Hills, CA, USA"
        mail="brandon.smith@umusic.com"
        MainLink={p => <a href="#">{p.children}</a>}
        ZoomLink={p => <a href="#">{p.children}</a>}
        MailLink={p => <a href="#">{p.children}</a>}
        isCurrentUser={false}
        handleAddToContacts={() => alert('clicked add to contacts')}
        addToContactIcon="https://media.licdn.com/dms/image/C4D03AQHgxarEg1Cvuw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=thBaLX-J3-MoHdpJ3MvombNd4LOKfMHNRPLlmopM6KI"
        searchKeyword="bran"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for type page search card', () => {
    const tree = shallowRender(
      <Card
        type="article"
        variant="search"
        title="Brand Article"
        content={
          <>
            <p>
              Quam minima autem volupytatem ut optio set distintio quae. Atque
              quidem beatae article cumque.
            </p>
          </>
        }
        MainLink={p => <a href="#">{p.children}</a>}
        searchKeyword="rti"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for system and applications standard card', () => {
    const tree = shallowRender(
      <Card
        type="systemAndApplication"
        variant="standard"
        title="AirBnb for Work"
        bodySummary="Cras ac eros consectetur, pharetra ipsum quis, laoreet velit."
        technicalContactName="First Lastname"
        businessOwnerName="First Lastname"
        appOwnerName="First Lastname"
        url="https://www.google.com"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
