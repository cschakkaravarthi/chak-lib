"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var allLinksButton_1 = require("./allLinksButton");
var hamburgerButton_1 = require("./hamburgerButton");
var notificationsBadge_1 = require("./notificationsBadge");
var siteLogo_1 = require("./siteLogo");
var userBadge_1 = require("./userBadge");
var primaryButton_1 = require("./primaryButton");
var secondaryButton_1 = require("./secondaryButton");
var closeButton_1 = require("./closeButton");
var checkBox_1 = require("./checkBox");
var noNotification_1 = require("./noNotification");
var editButton_1 = require("./editButton");
var uploadButton_1 = require("./uploadButton");
var cancelButton_1 = require("./cancelButton");
var footerFeedbackView_1 = require("./footerFeedbackView");
var orgChart_1 = require("./orgChart");
var expandButton_1 = require("./expandButton");
var images_1 = require("../assets/images");
var contentWrapper_1 = require("./contentWrapper");
var thumbButton_1 = require("./thumbButton");
var OrgChart_model_1 = require("./../seeds/OrgChart.model");
var textbox_1 = require("./textbox");
var customCheckbox_1 = require("./customCheckbox");
var buttonWithIcon_1 = require("./buttonWithIcon");
var toast_1 = require("./toast");
var error_1 = require("./error");
var confirmationModal_1 = require("./confirmationModal");
var alertModal_1 = require("./alertModal");
var dateRangeHeader_1 = require("./dateRangeHeader");
var rejectModal_1 = require("./rejectModal");
var partition_1 = require("./partition");
exports["default"] = {
    component: allLinksButton_1.AllLinksButton,
    title: 'Components'
};
exports.dateRangeHeader = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(dateRangeHeader_1.DateRangeHeader, { leftTitle: "From", rightTitle: "Date" }))); };
exports.allLinksButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(allLinksButton_1.AllLinksButton, { imageSrc: images_1.images.allLinksGrid, handleClick: function () { } }))); };
exports.hamburgerButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement("div", { className: "dark-background p-5" },
        react_1["default"].createElement(hamburgerButton_1.HamburgerButton, { open: false, handleClick: function () { } }),
        react_1["default"].createElement(hamburgerButton_1.HamburgerButton, { open: true, handleClick: function () { } })))); };
exports.notificationsBadge = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement("div", { className: "dark-background" },
        react_1["default"].createElement(notificationsBadge_1.NotificationsBadge, { handleClick: function () {
                alert('clicked');
            }, notificationCount: 3 })))); };
exports.siteLogo = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(siteLogo_1.SiteLogo, { handleClick: function () {
            alert('clicked');
        }, logoSrc: images_1.images.siteLogo }))); };
exports.userBadge = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], { className: "bg-dark p-5" },
    react_1["default"].createElement(userBadge_1.UserBadge, { isFetching: true, fullName: "Luz Lacson", imageUrl: "https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg", handleClick: function () {
            alert('clicked');
        } }),
    react_1["default"].createElement("hr", null),
    react_1["default"].createElement(userBadge_1.UserBadge, { className: "ml-3", isFetching: false, fullName: "Luz Lacson", imageUrl: "https://gatewaychurch.ie/wp-content/uploads/2019/04/roberto-delgado-webb-758117-unsplash.jpg", handleClick: function () {
            alert('clicked');
        } }))); };
exports.closeButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(closeButton_1.CloseButton, { handleClick: function () {
            alert('clicked');
        } }))); };
exports.cancelButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(cancelButton_1.CancelButton, { handleClick: function () { return alert('Cancel Button clicked'); }, title: "Cancel Button" }))); };
exports.primaryButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(primaryButton_1.PrimaryButton, { handleClick: function () { return alert('Primary Button clicked'); }, title: "Primary Button" }))); };
exports.secondaryButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(secondaryButton_1.SecondaryButton, { handleClick: function () { return alert('Secondary Button clicked'); }, title: "Secondary Button" }))); };
exports.uploadButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(uploadButton_1.UploadButton, { handleClick: function () { return alert('Upload Button clicked'); }, title: "Upload", uniqueIdentifier: "1" }))); };
exports.checkBox = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(checkBox_1.Checkbox, { handleClick: function () {
            alert('clicked');
        }, title: "label" }))); };
exports.editButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(editButton_1.EditButton, { handleClick: function () { return alert('edit Button clicked'); } }))); };
exports.contentWrapper = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: "Test title" },
        react_1["default"].createElement("p", null, "Child prop was passed here.")))); };
exports.noNotification = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(noNotification_1.NoNotification, { title: "No new Notifications", backgroundImage: images_1.images.noNotification, message: "We\\'ll let you know when something pops up!" }))); };
exports.footerContainer = function () { return (react_1["default"].createElement(footerFeedbackView_1.FooterFeedbackView, { hrefLink: "https://umusic.service-now.com/assessment_take2.do?sysparm_assessable_type=ad428303db61c8d022fe96f9db9619f5", title: "FEEDBACK" })); };
exports.thumbButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(thumbButton_1.ThumbButton, { liked: false, numberOfLikes: 12, handleClick: function () { return alert('UnLiked'); }, icon: images_1.images.unlikedIcon }),
    react_1["default"].createElement(thumbButton_1.ThumbButton, { liked: true, numberOfLikes: 15, handleClick: function () { return alert('liked'); }, icon: images_1.images.likedIcon }))); };
exports.orgChart = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(orgChart_1.OrgChart, { Users: OrgChart_model_1.dummyUsers, handleClick: function () { return console.log('clicked'); } }))); };
exports.expandButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(expandButton_1.ExpandButton, { handleClick: function () { return alert('edit Button clicked'); }, title: "Expand" }))); };
exports.textbox = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(textbox_1.Textbox, { label: "Name", type: "text", controlId: "formName", allowCheckbox: false }))); };
exports.customCheckBox = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(customCheckbox_1.CustomCheckbox, { handleClick: function () {
            alert('clicked');
        }, title: "label", checked: true, className: "font-size-sm pr-1" }))); };
exports.buttonWithIcon = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(buttonWithIcon_1.ButtonWithIcon, { title: "Add to My Contacts", handleClick: function () {
            alert('clicked');
        }, imageSrc: images_1.images.addToContactsIcon, imageHeight: 14, imageWidth: 14 }))); };
exports.settingsButton = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(buttonWithIcon_1.ButtonWithIcon, { title: "Settings", handleClick: function () {
            alert('clicked');
        }, imageSrc: images_1.images.gearIcon, imageHeight: 20, imageWidth: 20, labelClassName: "text-upper g700-text-clr text-underlined letter-spacing-01rem" }))); };
exports.toastSuccess = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(toast_1.Toast, { message: "Added to My Contacts", variant: "success", className: "show" }))); };
exports.toastError = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(toast_1.Toast, { message: "Contact is already in My Contacts", variant: "error", className: "show" }))); };
exports.error400 = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(error_1.Error, { backgroundImage: images_1.images.faceBrowser, title: "Please upgrade your browser.", message: "UMG Central has detected that you are using an unsupported browser. Please use links below to download and install a supported browser.", isShowBrowsers: true, chromeImage: images_1.images.chromeIcon, safariImage: images_1.images.safariIcon, edgeImage: images_1.images.edgeIcon }))); };
exports.error401 = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(error_1.Error, { backgroundImage: images_1.images.faceLock, title: "Error 401", message: "User is not logged in.", isShowBrowsers: false }))); };
exports.error403 = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(error_1.Error, { backgroundImage: images_1.images.faceStop, title: "Error 403", message: "Forbidden content.", isShowBrowsers: false }))); };
exports.error404 = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(error_1.Error, { backgroundImage: images_1.images.faceDocument, title: "Error 404", message: "Page or resource not found at this URL.", isShowBrowsers: false }))); };
exports.error500 = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(error_1.Error, { backgroundImage: images_1.images.faceHeart, title: "Error 500", message: "Server error. It's not you - It's me.", isShowBrowsers: false }))); };
exports.confirmationModal = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(confirmationModal_1.ConfirmationModal, { dialogMessage: "Are you sure you want to remove this contact?", show: true, okayButtonText: "Remove", handleClose: function () { return alert('clicked close'); }, handleSave: function () { return alert('clicked save'); } }))); };
exports.alertModal = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(alertModal_1.AlertModal, { dialogMessage: "Please enter both month and day for Birthday.", show: true, alertButtonText: "Ok", handleClose: function () { return alert('clicked close'); } }))); };
exports.rejectModal = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(rejectModal_1.RejectModal, { dialogMessage: "Please provide a reason for rejection of this request.", show: true, handleClose: function () { return alert('clicked Close.'); }, handleReject: function () { return alert('clicked Reject.'); } }))); };
exports.partition = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(partition_1.Partition, { message: "The information below is private" }))); };
//# sourceMappingURL=components.stories.js.map