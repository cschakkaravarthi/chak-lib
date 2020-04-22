"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var quickToolsCard_1 = require("./quickToolsCard");
exports["default"] = {
    component: quickToolsCard_1.BasicQuickToolsCard,
    title: 'Quick Tools'
};
exports.somethingsBroken = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(quickToolsCard_1.BasicQuickToolsCard, { isFetching: false, title: "Something's Broken!", Links: [
            {
                linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                linkTitle: 'Create an i.t. ticket'
            }
        ] }))); };
exports.passwordReset = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(quickToolsCard_1.BasicQuickToolsCard, { isFetching: false, title: "Self-Service Password Reset", Links: [
            {
                linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                linkTitle: 'Reset Password'
            }
        ] }))); };
exports.timeOffRequest = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(quickToolsCard_1.BasicQuickToolsCard, { isFetching: false, title: "Time off request", Links: [
            {
                linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                linkTitle: 'Request time off'
            }
        ] }))); };
exports.importantContacts = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(quickToolsCard_1.BasicQuickToolsCard, { title: "Important Contacts", Links: [
            {
                linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                linkTitle: 'Security'
            },
            {
                linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                linkTitle: 'Facilities'
            }
        ] }))); };
//# sourceMappingURL=quickTools.stories.js.map