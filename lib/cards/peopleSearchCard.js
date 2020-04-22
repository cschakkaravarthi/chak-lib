"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var readMoreLinkContainer_1 = require("./readMoreLinkContainer");
var Image_1 = __importDefault(require("react-bootstrap/Image"));
var buttonWithIcon_1 = require("../components/buttonWithIcon");
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
var cardHelper_1 = require("./cardHelper");
exports.PeopleSearchCard = function (props) {
    var mail = props.mail, title = props.title, imageUrl = props.imageUrl, MailLink = props.MailLink, PhoneLink = props.PhoneLink, MainLink = props.MainLink, isFetching = props.isFetching, companyName = props.companyName, designation = props.designation, phoneNumber = props.phoneNumber, workLocation = props.workLocation, isCurrentUser = props.isCurrentUser, addToContactIcon = props.addToContactIcon, _a = props.searchKeyword, searchKeyword = _a === void 0 ? '' : _a, handleAddToContacts = props.handleAddToContacts, _b = props.circleSkeleton, circleSkeleton = _b === void 0 ? true : _b;
    return (react_1["default"].createElement(Card_1["default"], { className: "card-people-search-default rounded-0 h-100 p-3 border-0" },
        react_1["default"].createElement("div", { className: "row mr-0 ml-0" },
            react_1["default"].createElement("div", { className: "col-12 col-xl-2 pt-2 pr-0 pl-2 pb-0 people-badge text-xs-left text-sm-left text-lg-left text-xl-center" }, !isFetching ? (imageUrl &&
                MainLink && (react_1["default"].createElement(MainLink, null,
                react_1["default"].createElement(Image_1["default"], { src: imageUrl, roundedCircle: true, className: "order-xl-1" })))) : (react_1["default"].createElement("span", { className: "" + (circleSkeleton && 'circle-skeleton') },
                react_1["default"].createElement(react_loading_skeleton_1["default"], { circle: true, height: 50, width: 50 })))),
            react_1["default"].createElement("div", { className: "col-12 col-xl-10 p-0 text-break align-items-center d-flex" },
                react_1["default"].createElement(Card_1["default"].Body, { className: 'justify-content-between flex-column pt-0 pl-2 pr-2 pb-2 g700-text-clr' },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Card_1["default"].Text, { className: "mt-2 mb-0 text-condensed font-size-20" }, !isFetching ? (MainLink && (react_1["default"].createElement(MainLink, null, cardHelper_1.highlight(title, searchKeyword)))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 190 }))),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "mb-0 font-size-sm" }, !isFetching ? designation : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 })),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "mb-0 font-size-sm" }, !isFetching ? companyName : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 120 })),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm" }, !isFetching ? workLocation : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 140 })),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "mb-0 font-size-sm" }, !isFetching && MailLink ? (react_1["default"].createElement(MailLink, null,
                            react_1["default"].createElement("u", null, !isFetching ? mail : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 160 })))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 165 }))),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "mb-0 font-size-sm" }, PhoneLink && (react_1["default"].createElement(PhoneLink, null,
                            react_1["default"].createElement("u", null, !isFetching ? phoneNumber : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 110 }))))),
                        !isCurrentUser &&
                            (!isFetching ? (react_1["default"].createElement(buttonWithIcon_1.ButtonWithIcon, { imageWidth: 20, imageHeight: 20, className: "mt-3", title: "Add to My Contacts", imageSrc: addToContactIcon, handleClick: handleAddToContacts })) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 135 })))),
                    !isFetching ? (react_1["default"].createElement("div", { className: "mt-3" }, MainLink ? (react_1["default"].createElement(readMoreLinkContainer_1.ReadMoreLinkContainer, null,
                        react_1["default"].createElement(MainLink, null,
                            react_1["default"].createElement("u", { className: "text-uppercase letter-spacing" }, "View More")))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], null)))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 })))))));
};
//# sourceMappingURL=peopleSearchCard.js.map