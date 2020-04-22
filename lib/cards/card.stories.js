"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var card_1 = require("./card");
var images_1 = require("../assets/images");
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
exports["default"] = {
    component: card_1.Card,
    title: 'Cards'
};
var SINGLE_CATEGORY = {
    drupal_id: 123,
    title: 'Test'
};
var ANOTHER_SINGLE_CATEGORY = {
    drupal_id: 456,
    title: 'Another Test'
};
var MULTIPLE_CATEGORIES = [SINGLE_CATEGORY, ANOTHER_SINGLE_CATEGORY];
exports.createApreciationCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { variant: "create", type: "appreciation", title: "CREATE CARD", onClick: function () { return alert('create appreciation default clicked'); } }))); };
exports.appreciationCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { variant: "default", type: "appreciation", title: "Receiver Name", senderName: "Sender Name", imgTopSrc: images_1.images.apCard1, imgBottomSrc: images_1.images.apCard2, appreciationText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", onClick: function () { return alert('appreciation default clicked'); } }))); };
exports.appreciationCardThumbnail = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { title: "", variant: "thumbnail", type: "appreciation", imgTopSrc: images_1.images.apCard1, imgBottomSrc: images_1.images.apCard2, onClick: function () { return alert('appreciation default clicked'); } }))); };
exports.appreciationCardNotification = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { isFetching: false, type: "appreciation", variant: "notification", title: "Appreciation card notication title", onClick: function () { return alert('notification card clicked'); } }))); };
exports.individualPersonCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "people", title: "Job Title", fullName: "Daft Punk", variant: "individual", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, imageUrl: 'https://consequenceofsound.net/wp-content/uploads/2015/02/screen-shot-2015-02-05-at-1-05-38-pm.png' }))); };
exports.mapCard = function () {
    var txtOnMap = 'universal music 2100 Colorado Ave Suite #1';
    var txt = '<p>Universal Music 2100</p><p>Colorado Ave Suite #1</p>';
    return (react_1["default"].createElement(StoriesContainer_1["default"], null,
        react_1["default"].createElement(card_1.Card, { type: "map", address: react_1["default"].createElement("div", { dangerouslySetInnerHTML: {
                    __html: txt
                } }), title: "Address", topBorder: "lightblue", addressOnMap: txtOnMap })));
};
exports.articleCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { isFetching: false, pictureSkeletonHeight: 500, type: "article", title: "Alicia Keys Signs with Universal Music Publishing Group", imageUrl: 'https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg', date: "July 20, 2019", categories: MULTIPLE_CATEGORIES, MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, likes: 1, likedStatus: true, fullHeight: false, handleThumbClick: function () { return alert('liked pressed'); } }))); };
exports.articleCardFeatured = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "article", variant: "featured", isFetching: false, pictureSkeletonHeight: 350, title: "Alicia Keys Signs with Universal Music Publishing Group", summary: 'Universal Music Publishing Group (UMPG) today announced that 15-time Grammy Award-winning artist, songwriter, and record producer Alicia Keys has been signed to an exclusive administration deal.', imageUrl: 'https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg', date: "July 20, 2019", categories: MULTIPLE_CATEGORIES, MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, likes: 1, likedStatus: false, handleThumbClick: function () { return alert('unliked pressed'); } }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", type: "article", variant: "featured", isFetching: true, pictureSkeletonHeight: 300 }))); };
exports.articleCardFull = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "article", variant: "full", title: "Alicia Keys Signs with Universal Music Publishing Group", subtitle: 'UMPG to Globally Administer Rights to Alicia Keys’ Iconic Song Catalog', content: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociis sodales, dis dictumst molestie risus. Habitant facilisi penatibus natoque erat ac pharetra ultricies tempor ad, eget non proin purus torquent aliquet enim nisl nulla, vehicula cursus inceptos eleifend sociosqu laoreet donec augue. Suspendisse fusce viverra commodo pellentesque feugiat nam integer rhoncus, sem quam est nulla tortor massa inceptos hendrerit, potenti purus sapien mus himenaeos vel molestie."),
            react_1["default"].createElement("p", null, "Sollicitudin placerat mi dapibus urna varius class eget vulputate, tristique maecenas habitasse etiam netus taciti rhoncus phasellus duis, eros laoreet blandit quis ornare sociis sociosqu. Accumsan enim suspendisse platea donec habitant nunc sapien phasellus molestie metus cum posuere, torquent luctus vitae penatibus erat sagittis congue at dignissim class natoque, dictumst et curae condimentum tellus porta purus eu mi aenean justo. Fermentum hendrerit nisi hac tortor aliquet nibh tempor phasellus inceptos himenaeos netus, sed est augue dui praesent ullamcorper lectus vehicula lobortis non, metus magnis conubia potenti eu facilisis tincidunt a nunc volutpat.")), imageUrl: 'https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg', date: "July 20, 2019", categories: MULTIPLE_CATEGORIES, MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }))); };
exports.eventCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "event", imageUrl: "https://picsum.photos/500/500?grayscale", title: "Industry Event Title", date: "September 28, 2019", location: "Los Angeles, CA", categories: MULTIPLE_CATEGORIES, MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, MoreInfoLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, AddToCalenderLink: function (p) {
            console.log(p);
        } }))); };
exports.minimalCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "link", variant: "minimal", title: "Minimal Card", imageUrl: "https://picsum.photos/500/500", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }))); };
exports.eventCardFull = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "event", variant: "full", title: "2019 CMA Awards Nominations Announced", subtitle: "Brothers Osborne Lead UMG Artists with Four Nominations", location: "Venue name, Los Angeles, ca", content: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociis sodales, dis dictumst molestie risus. Habitant facilisi penatibus natoque erat ac pharetra ultricies tempor ad, eget non proin purus torquent aliquet enim nisl nulla, vehicula cursus inceptos eleifend sociosqu laoreet donec augue. Suspendisse fusce viverra commodo pellentesque feugiat nam integer rhoncus, sem quam est nulla tortor massa inceptos hendrerit, potenti purus sapien mus himenaeos vel molestie."),
            react_1["default"].createElement("p", null, "Sollicitudin placerat mi dapibus urna varius class eget vulputate, tristique maecenas habitasse etiam netus taciti rhoncus phasellus duis, eros laoreet blandit quis ornare sociis sociosqu. Accumsan enim suspendisse platea donec habitant nunc sapien phasellus molestie metus cum posuere, torquent luctus vitae penatibus erat sagittis congue at dignissim class natoque, dictumst et curae condimentum tellus porta purus eu mi aenean justo. Fermentum hendrerit nisi hac tortor aliquet nibh tempor phasellus inceptos himenaeos netus, sed est augue dui praesent ullamcorper lectus vehicula lobortis non, metus magnis conubia potenti eu facilisis tincidunt a nunc volutpat.")), imageUrl: "https://picsum.photos/500/300", date: "Aug 28, 2019, 8:00PM \u2013 Aug 29, 2019, 10:00PM", categories: MULTIPLE_CATEGORIES, MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }))); };
exports.departmentCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "department", variant: "standard", title: "Communications", sectionIcon: images_1.images.sectionIcon1, bodyContent: react_1["default"].createElement("p", null, "Lorem ipsum... Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum..."), VisitLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }))); };
exports.employeeServCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "employeeServ", variant: "standard", title: "Training", imageUrl: "https://picsum.photos/500/500?grayscale", summary: 'Nam non sem vel urna porta tempor at eu dui. Cras ac eros consectetur, pharetra ipsum quis, laoreet velit.', VisitLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, linkText: "BACKSTAGE" }))); };
exports.notificationCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { isArchive: false, categories: MULTIPLE_CATEGORIES, variant: "standard", type: "notification", notificationType: "maintenence", dateTime: "October 23, 2019 16:28 PM PDT", title: "Emergency Alert - Los Angeles Area Earthquake", body_full: 'Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests.', body_summary: 'Global Communications oversees all aspects of external and internal communications', drupal_id: 518, onArchive: function (drupal_id) { return alert(drupal_id); } }))); };
exports.approvalNotificationCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { isArchive: false, isApprove: true, serviceNowLink: "https://umusicdev.service-now.com/ess/task_status.do?view=approvals", categories: [{
                drupal_id: 123,
                title: 'UMG IT'
            }], variant: "standard", type: "notification", notificationType: "approval", dateTime: "October 23, 2019 16:28 PM PDT", title: "Requested Item: RITM0085038 - \u20A80.00 - Anumothu Rajendran", body_full: 'Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests.', body_summary: 'Global Communications oversees all aspects of external and internal communications', drupal_id: 518, onApprove: function (drupal_id) { return alert(drupal_id); }, onReject: function (drupal_id) { return alert(drupal_id); } }))); };
exports.eventCardList = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { title: "Events", isFetching: false, topBorder: "yellow", variant: "standard", type: "cardsInContainer", headerLinkText: "All Events", HeaderLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, AddToCalenderLink: function (p) {
            console.log(p);
        } }, [
        react_1["default"].createElement(card_1.Card, { isFetching: false, type: "event", title: "Industry Event Title", variant: "embedded", date: "September 28, 2019", location: "Los Angeles, CA", categories: MULTIPLE_CATEGORIES, MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, AddToCalenderLink: function (p) {
                console.log(p);
            } }),
        react_1["default"].createElement(card_1.Card, { isFetching: false, type: "event", variant: "embedded", title: "UMG Event with an Even Longer Title", date: "September 28, 2019", location: "Woodland Hills, CA", categories: MULTIPLE_CATEGORIES, MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, AddToCalenderLink: function (p) {
                console.log(p);
            } })
    ]))); };
exports.eventCardEmbedded = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement("p", null, "* This component by itself is very simple. It has no borders. Its purpose is to be used on a list wrapped by a container"),
    react_1["default"].createElement("hr", { className: "mb-5" }),
    react_1["default"].createElement(card_1.Card, { type: "event", title: "Industry Event Title", variant: "embedded", date: "September 28, 2019", location: "Los Angeles, CA", categories: MULTIPLE_CATEGORIES, MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, AddToCalenderLink: function (p) {
            console.log(p);
        } }),
    react_1["default"].createElement("hr", { className: "mt-5" }),
    react_1["default"].createElement("p", null, "* See the component below to catch a better example or refer to the component in the story book, named: Event Card List"),
    react_1["default"].createElement("hr", { className: "mb-5" }),
    exports.eventCardList())); };
exports.cardsListsContainer = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement("p", null, "* Any type of card could be used here as a child."),
    react_1["default"].createElement("hr", { className: "mb-5" }),
    react_1["default"].createElement(card_1.Card, { variant: "standard", type: "cardsInContainer", title: "New notifications", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }, [
        react_1["default"].createElement(card_1.Card, { isNew: true, categories: MULTIPLE_CATEGORIES, variant: "standard", type: "notification", notificationType: "maintenence", dateTime: "October 23, 2019 16:28 PM PDT", title: "Emergency Alert - Los Angeles Area Earthquake", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, summary: 'Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests.' }),
        react_1["default"].createElement(card_1.Card, { isNew: false, categories: MULTIPLE_CATEGORIES, variant: "standard", type: "notification", notificationType: "alert", dateTime: "October 23, 2019 16:28 PM PDT", title: "Emergency Alert - Los Angeles Area Earthquake", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, summary: 'Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests. Global Communications oversees all aspects of external and internal communications relating to Universal Music Group and its many businesses and interests.' })
    ]))); };
exports.peopleCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "people", variant: "profile", imageUrl: "https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg", title: "Sr. Director, Business Process Management", department: "Royalties IT", companyName: "Company Name", location: "Woodland Hills, CA", center: "USIC", desk: "1A", handleChangePhoto: function () { return alert('changephoto clicked'); }, isUploading: false, isCurrentUser: true, handleDeletePhoto: function () { return alert('deletephoto clicked'); }, hasProfilePhoto: true }))); };
exports.contactMeCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "contactMe", variant: "standard", title: "Contact Me", office: "818.212.0897", mobile: "818.264.4243", email: "luz.lacson@umusic.com", handleClick: function () { return alert('edit button clicked'); }, isCurrentUser: false, addToContactImage: images_1.images.addToContactsIcon, handleAddToContacts: function () { return alert('add to contacts clicked'); } }))); };
exports.myContacts = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "contactMe", variant: "profile", title: "First Lastname", office: "818.212.0897", mobile: "818.264.4243", email: "first.lastname@umusic.com", handleClick: function () { return alert('close button clicked'); }, contactPic: "https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg", isCurrentUser: false, LinkToProfile: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }))); };
exports.getToKnowMeCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "getToKnowMe", variant: "standard", title: "Get to know me", nickname: "Chi", birthDay: "13", birthMonth: "January", anniversaryMonth: "July", anniversaryDay: "1", languagesSpoken: "English, Spanish", professionalSkills: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.", currentlyWorking: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', aboutMe: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', handleClick: function () { return alert('edit button clicked'); }, isCurrentUser: false }))); };
var dummyImg = 'https://www.universalmusic.com/wp-content/uploads/2019/09/Alicia-Keys-UMPG-credit-James-Bailey.jpg';
exports.minimalNewsList = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { title: "News", type: "article", variant: "newsList", topBorder: "lightblue" }, [
        react_1["default"].createElement(card_1.Card, { type: "article", imageUrl: dummyImg, variant: "newsListEmbedded", date: "September 28, 2019", title: "Industry article Title", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }),
        react_1["default"].createElement(card_1.Card, { type: "article", imageUrl: dummyImg, date: "September 28, 2019", variant: "newsListEmbedded", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, title: "UMG Event with an Even Longer Title" })
    ]))); };
exports.minimalNewsEmbedded = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "article", imageUrl: dummyImg, variant: "newsListEmbedded", date: "September 28, 2019", title: "Industry article Title", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }))); };
exports.OfficesList = function () {
    var officeData = [
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
    return (react_1["default"].createElement(StoriesContainer_1["default"], null,
        react_1["default"].createElement(card_1.Card, { title: "", variant: "light", type: "officesListContainer", officeData: officeData, VisitLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } })));
};
exports.knowledgeBaseSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { isFetching: false, type: "knowledgeBase", variant: "search", title: "Brand Article", date: "January 1,2019", authorName: "Author Name", searchSummary: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.")), MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, searchKeyword: "rticl" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", variant: "search", isFetching: true, type: "knowledgeBase" }))); };
exports.techCatalogSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "techCatalog", variant: "search", title: "Product Title", searchSummary: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.")), MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, searchKeyword: "Title" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", variant: "search", isFetching: true, type: "techCatalog" }))); };
exports.linkSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "link", variant: "search", title: "Branding & Style Guide", imageSrc: images_1.images.external, searchSummary: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.")), MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, searchKeyword: "Guide" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", type: "link", variant: "search", isFetching: true }))); };
exports.documentSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "document", variant: "search", title: "Document Title", searchSummary: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.")), MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, searchKeyword: "Title" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", type: "document", variant: "search", isFetching: true }))); };
exports.departmentSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "department", variant: "search", title: "Brand Department", searchSummary: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.")), MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, searchKeyword: "part" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", isFetching: true, type: "department", variant: "search" }))); };
exports.officeSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "office", variant: "search", title: "Woodland Hills", officeAddress: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "21301 Burbank Blvd"),
            react_1["default"].createElement("p", null, "Woodland Hills, CA 91367")), MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, searchKeyword: "land" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", type: "office", variant: "search", isFetching: true }))); };
exports.pageSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "page", variant: "search", title: "Page Title", departmentName: "Department Name", searchSummary: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae cumque.")), MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, searchKeyword: "Title" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", type: "page", variant: "search", isFetching: true }))); };
exports.brandsLabelsCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "brands", variant: "default", imageUrl: "https://i.ibb.co/zxcfjbG/bravado.png", title: "Bravado", url: "https://bravado.com" }))); };
exports.peopleSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "people", variant: "search", isFetching: false, imageUrl: "https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg", title: "Brandon Smith", designation: "Designation", department: "Job Title, Department", companyName: "Company Name", workLocation: "Woodland Hills, CA, USA", mail: "brandon.smith@umusic.com", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, ZoomLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, MailLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, isCurrentUser: false, handleAddToContacts: function () { return alert('clicked add to contacts'); }, addToContactIcon: images_1.images.addToContactsIcon, searchKeyword: "bran" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { title: "", type: "people", variant: "search", isFetching: true }))); };
exports.articleSearchCard = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(card_1.Card, { type: "article", variant: "search", title: "Brand Article", content: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("p", null, "Quam minima autem volupytatem ut optio set distintio quae. Atque quidem beatae article cumque.")), MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, searchKeyword: "rti" }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(card_1.Card, { isFetching: true, title: "", type: "article", variant: "search" }))); };
//# sourceMappingURL=card.stories.js.map