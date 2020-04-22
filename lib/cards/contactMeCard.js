"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var editButton_1 = require("../components/editButton");
var buttonWithIcon_1 = require("../components/buttonWithIcon");
var contentWrapper_1 = require("../components/contentWrapper");
exports.ContactMeCard = function (props) {
    var title = props.title, email = props.email, office = props.office, mobile = props.mobile, handleClick = props.handleClick, isCurrentUser = props.isCurrentUser, addToContactImage = props.addToContactImage, handleAddToContacts = props.handleAddToContacts;
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: "", topBorder: "yellow", showContentTop: false, wrapperClass: "card-event-standard card-contact h-100" },
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement("div", { className: "d-flex justify-content-between" },
                react_1["default"].createElement(Card_1["default"].Title, { className: "text-upper mb-3" }, title),
                isCurrentUser && handleClick && (react_1["default"].createElement(editButton_1.EditButton, { handleClick: handleClick, title: "Edit" }))),
            react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm font-weight-bold" },
                react_1["default"].createElement("div", { className: "mb-3" },
                    react_1["default"].createElement("span", { className: "text-upper text-secondary d-inline-block" }, "Office"),
                    isCurrentUser && react_1["default"].createElement("span", { className: "font-size-base text-condensed" }, office),
                    !isCurrentUser && react_1["default"].createElement("a", { href: "tel:" + office, className: "font-size-base text-condensed" }, office)),
                react_1["default"].createElement("div", { className: "mb-3" },
                    react_1["default"].createElement("span", { className: "text-upper text-secondary d-inline-block" }, "Mobile"),
                    isCurrentUser && react_1["default"].createElement("span", { className: "font-size-base text-condensed" }, mobile),
                    !isCurrentUser && react_1["default"].createElement("a", { href: "tel:" + mobile, className: "font-size-base text-condensed" }, mobile)),
                react_1["default"].createElement("div", { className: "mb-3 d-flex align-items-baseline" },
                    react_1["default"].createElement("span", { className: "text-upper text-secondary d-inline-block" }, "Email"),
                    isCurrentUser && react_1["default"].createElement("span", { className: "font-size-base text-condensed text-break" }, email),
                    !isCurrentUser && react_1["default"].createElement("a", { href: "mailto:" + email, className: "font-size-base text-condensed text-break" }, email))),
            !isCurrentUser && handleAddToContacts && (react_1["default"].createElement(buttonWithIcon_1.ButtonWithIcon, { imageWidth: 20, imageHeight: 20, title: "Add to My Contacts", imageSrc: addToContactImage, handleClick: handleAddToContacts })))));
};
//# sourceMappingURL=contactMeCard.js.map