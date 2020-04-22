"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var allLinksButton_1 = require("./allLinksButton");
var hamburgerButton_1 = require("./hamburgerButton");
var notificationsBadge_1 = require("./notificationsBadge");
var siteLogo_1 = require("./siteLogo");
var userBadge_1 = require("./userBadge");
var contentWrapper_1 = require("./contentWrapper");
var primaryButton_1 = require("./primaryButton");
var secondaryButton_1 = require("./secondaryButton");
var closeButton_1 = require("./closeButton");
var uploadButton_1 = require("./uploadButton");
var checkBox_1 = require("./checkBox");
var editButton_1 = require("./editButton");
var footerFeedbackView_1 = require("./footerFeedbackView");
var images_1 = require("../assets/images");
var thumbButton_1 = require("./thumbButton");
var orgChart_1 = require("./orgChart");
var OrgChart_model_1 = require("./../seeds/OrgChart.model");
var customCheckbox_1 = require("./customCheckbox");
var buttonWithIcon_1 = require("./buttonWithIcon");
var toast_1 = require("./toast");
var error_1 = require("./error");
var confirmationModal_1 = require("./confirmationModal");
var alertModal_1 = require("./alertModal");
var dateRangeHeader_1 = require("./dateRangeHeader");
var partition_1 = require("./partition");
describe('Components', function () {
    it('Date Range Header should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(dateRangeHeader_1.DateRangeHeader, { leftTitle: "From", rightTitle: "Date" }));
        expect(tree).toMatchSnapshot();
    });
    it('ContentWrapper should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: "Test title" },
            react_1["default"].createElement("p", null, "Testing ContentWrapper children prop")));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly for AllLinksButton', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(allLinksButton_1.AllLinksButton, { handleClick: function () {
                alert('clicked');
            } }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly for HambugerButton', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(hamburgerButton_1.HamburgerButton, { handleClick: function () {
                alert('clicked');
            } }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly for NotificationsBadge', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(notificationsBadge_1.NotificationsBadge, { handleClick: function () {
                alert('clicked');
            }, notificationCount: 3 }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly for SiteLogo', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(siteLogo_1.SiteLogo, { handleClick: function () {
                alert('clicked');
            }, logoSrc: images_1.images.siteLogo }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly for UserBadge', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(userBadge_1.UserBadge, { handleClick: function () {
                alert('clicked');
            }, fullName: 'Luz Lacson', imageUrl: 'https://media.licdn.com/dms/image/C4D03AQHgxarEg1Cvuw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=thBaLX-J3-MoHdpJ3MvombNd4LOKfMHNRPLlmopM6KI' }));
        expect(tree).toMatchSnapshot();
    });
});
it('should render correctly for Primary button', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(primaryButton_1.PrimaryButton, { handleClick: function () { return alert('Primary Button clicked'); }, title: "Primary Button" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Secondary Button', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(secondaryButton_1.SecondaryButton, { handleClick: function () { return alert('Secondary Button clicked'); }, title: "Secondary Button" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Close toggle Button', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(closeButton_1.CloseButton, { handleClick: function () {
            alert('clicked');
        } }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for CheckBox', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(checkBox_1.Checkbox, { handleClick: function () {
            alert('clicked');
        }, title: "CheckLabel" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Edit Button', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(editButton_1.EditButton, { handleClick: function () {
            alert('clicked');
        }, title: "Edit" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Upload Button', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(uploadButton_1.UploadButton, { handleClick: function () {
            alert('clicked');
        }, title: "Upload", uniqueIdentifier: "1" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for FooterFeedbackView', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(footerFeedbackView_1.FooterFeedbackView, { handleClick: function () {
            alert('clicked');
        }, title: "Edit" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Thumb button unlike', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(thumbButton_1.ThumbButton, { liked: false, numberOfLikes: 12, handleClick: function () {
            alert('clicked');
        } }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Thumb button like', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(thumbButton_1.ThumbButton, { liked: true, numberOfLikes: 12, handleClick: function () {
            alert('clicked');
        } }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Organisation Chart', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(orgChart_1.OrgChart, { Users: OrgChart_model_1.dummyUsers, handleClick: function () { return console.log('clicked'); } }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for CheckBox', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(customCheckbox_1.CustomCheckbox, { handleClick: function () {
            alert('clicked');
        }, title: "label", checked: true, className: "font-size-sm pr-1" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Button with Icon', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(buttonWithIcon_1.ButtonWithIcon, { title: "Add to My Contacts", handleClick: function () {
            alert('clicked');
        }, imageSrc: images_1.images.addToContactsIcon, imageHeight: 20, imageWidth: 20 }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Toast', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(toast_1.Toast, { message: "Added to My Contacts", variant: "success", className: "show" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Toast', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(toast_1.Toast, { message: "Contact is already in My Contacts", variant: "error", className: "show" }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Error', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(error_1.Error, { backgroundImage: images_1.images.faceBrowser, title: "Please upgrade your browser.", message: "UMG Central has detected that you are using an unsupported browser. Please use links below to download and install a supported browser.", isShowBrowsers: true }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Confirmation Modal', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(confirmationModal_1.ConfirmationModal, { dialogMessage: "Are you sure you want to remove this contact?", show: true, okayButtonText: "Remove", handleClose: function () { return alert('clicked close'); }, handleSave: function () { return alert('clicked save'); } }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Alert Modal', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(alertModal_1.AlertModal, { dialogMessage: "Please enter both month and day for Birthday.", show: true, alertButtonText: "Ok", handleClose: function () { return alert('clicked close'); } }));
    expect(tree).toMatchSnapshot();
});
it('should render correctly for Partition with message', function () {
    var tree = testHelper_1.shallowRender(react_1["default"].createElement(partition_1.Partition, { message: "The information below is private" }));
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=components.test.js.map