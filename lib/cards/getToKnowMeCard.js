"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var editButton_1 = require("../components/editButton");
var contentWrapper_1 = require("../components/contentWrapper");
exports.GetToKnowMeCard = function (props) {
    var title = props.title, aboutMe = props.aboutMe, nickname = props.nickname, birthDay = props.birthDay, birthMonth = props.birthMonth, handleClick = props.handleClick, isCurrentUser = props.isCurrentUser, anniversaryDay = props.anniversaryDay, languagesSpoken = props.languagesSpoken, anniversaryMonth = props.anniversaryMonth, currentlyWorking = props.currentlyWorking, professionalSkills = props.professionalSkills;
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: "", showContentTop: false, topBorder: "darkTurquoise", wrapperClass: "card-user-description fix-height flex-row text-condensed h-100" },
        react_1["default"].createElement(Card_1["default"].Body, { className: "justify-content-between card-people-description" },
            react_1["default"].createElement("div", { className: "d-flex justify-content-between" },
                react_1["default"].createElement(Card_1["default"].Title, { className: "text-upper mb-4" }, title),
                isCurrentUser && handleClick && (react_1["default"].createElement(editButton_1.EditButton, { handleClick: handleClick, title: "Edit" }))),
            react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm" },
                react_1["default"].createElement("div", { className: "mb-2" },
                    react_1["default"].createElement("span", { className: "text-condensed font-weight-bold pr-2" }, "Nickname:"),
                    react_1["default"].createElement("span", { className: "font-size-md" }, nickname)),
                react_1["default"].createElement("div", { className: "mb-2" },
                    react_1["default"].createElement("span", { className: "text-condensed font-weight-bold pr-2" }, "Birthday:"),
                    react_1["default"].createElement("span", { className: "font-size-md" }, birthMonth + ' ' + birthDay)),
                react_1["default"].createElement("div", { className: "mb-2" },
                    react_1["default"].createElement("span", { className: "text-condensed font-weight-bold pr-2" }, "Work Anniversary:"),
                    react_1["default"].createElement("span", { className: "font-size-md" }, anniversaryMonth + ' ' + anniversaryDay)),
                react_1["default"].createElement("div", { className: "mb-4" },
                    react_1["default"].createElement("span", { className: "text-condensed font-weight-bold pr-2" }, "Languages Spoken:"),
                    react_1["default"].createElement("span", { className: "font-size-md" }, languagesSpoken)),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "text-condensed font-weight-bold mb-2" }, "Professional Skills:"),
                    react_1["default"].createElement("p", { className: "font-size-sm" }, professionalSkills)),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "text-condensed font-weight-bold mb-2" }, "What I'm currently working on:"),
                    react_1["default"].createElement("p", { className: "font-size-sm" }, currentlyWorking)),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "text-condensed font-weight-bold mb-2" }, "Something about me:"),
                    react_1["default"].createElement("p", { className: "font-size-sm" }, aboutMe))))));
};
//# sourceMappingURL=getToKnowMeCard.js.map