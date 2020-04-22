"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var contentWrapper_1 = require("../components/contentWrapper");
var editButton_1 = require("../components/editButton");
var images_1 = require("../assets/images");
exports.PeopleCard = function (props) {
    var desk = props.desk, title = props.title, center = props.center, imageUrl = props.imageUrl, location = props.location, department = props.department, companyName = props.companyName, handleChangePhoto = props.handleChangePhoto, isCurrentUser = props.isCurrentUser, isUploading = props.isUploading, loader = props.loader, handleDeletePhoto = props.handleDeletePhoto, hasProfilePhoto = props.hasProfilePhoto;
    var getImage = function () {
        if (isUploading) {
            return loader;
        }
        else {
            return imageUrl;
        }
    };
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: "", showContentTop: false, bodyClass: "d-flex flex-column flex-md-row", wrapperClass: "card-people-profile text-condensed h-100" },
        react_1["default"].createElement("div", null,
            imageUrl && (react_1["default"].createElement("div", { className: "card-people-avatar" },
                react_1["default"].createElement(Card_1["default"].Img, { variant: "top", src: getImage(), className: "rounded-circle" }))),
            isCurrentUser && react_1["default"].createElement("div", { className: "pt-2" },
                handleChangePhoto && react_1["default"].createElement(editButton_1.EditButton, { className: "m-md-auto p-lg-0 pl-3 d-block", title: "Change Photo", handleClick: handleChangePhoto }),
                handleDeletePhoto && hasProfilePhoto && react_1["default"].createElement(editButton_1.EditButton, { className: "m-md-auto p-lg-0 pl-3 d-block", title: "Remove Photo", handleClick: handleDeletePhoto, imageSrc: images_1.images.remove })),
            isUploading && react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("span", { className: "font-size-xs" }, "Processing"))),
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement(Card_1["default"].Title, { className: "font-weight-bold mb-3" }, title),
            react_1["default"].createElement(Card_1["default"].Text, { className: "text-upper font-size-sm" },
                react_1["default"].createElement("div", null, location),
                react_1["default"].createElement("div", null, companyName),
                react_1["default"].createElement("div", null, department),
                react_1["default"].createElement("div", null,
                    "Profit Center: ",
                    center),
                react_1["default"].createElement("div", null,
                    "Desk: ",
                    desk)))));
};
//# sourceMappingURL=peopleCard.js.map