"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var getToKnowMeForm_1 = require("./getToKnowMeForm");
var contactMeForm_1 = require("./contactMeForm");
var myToolKit_1 = require("./myToolKit");
exports["default"] = {
    component: getToKnowMeForm_1.GetToKnowMeForm,
    title: 'User Profile Forms'
};
exports.getToKnowMeForm = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(getToKnowMeForm_1.GetToKnowMeForm, { title: 'Get to know me', nickname: 'Janie', birthDay: '1', birthMonth: 'January', anniversaryMonth: 'December', anniversaryDay: '11', languagesSpoken: 'English, Spanish', professionalSkills: "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry\\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.", currentlyWorking: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', aboutMe: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', handleCheckboxWithIdentifier: function (e, uniqueIdentifier) {
            e.preventDefault();
            alert("Checkbox of " + uniqueIdentifier + " is clicked.");
        }, handleSave: function () { return alert('Save Button clicked'); }, handleCancel: function () { return alert('Cancel Button clicked'); }, handleHideBirthday: function () { return alert('hide birthday clicked'); }, handleHideAnniversary: function () { return alert('hide anniversary clicked'); }, hideBirthdayOnProfile: true, hideAnniversaryOnProfile: false }))); };
exports.contactMeForm = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(contactMeForm_1.ContactMeForm, { title: 'Contact Me', hideMobileNumberOnProfile: true, mobileNumber: '9900990099', handleCheckboxWithIdentifier: function (e, uniqueIdentifier) {
            e.preventDefault();
            alert("Checkbox of " + uniqueIdentifier + " is clicked.");
        }, handleSave: function () { return alert('Save Button clicked'); }, handleCancel: function () { return alert('Cancel Button clicked'); } }))); };
exports.bookmarkInput = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(myToolKit_1.BookmarkInput, { handleSave: function (url, title) {
            console.log(url, title);
        } }))); };
exports.todoInput = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(myToolKit_1.TodoInput, { handleSave: function (text) {
            console.log(text);
        } }))); };
exports.bookmarkItem = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(myToolKit_1.BookmarkItem, { identifier: '123', title: 'Hello', url: 'https://lol.com', handleDelete: function (identifier) {
            console.log(identifier);
        } }))); };
exports.todoItem = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(myToolKit_1.TodoItem, { identifier: '123', text: 'Something to take care of', handleDelete: function (identifier) {
            console.log(identifier);
        } }))); };
//# sourceMappingURL=userProfileForms.stories.js.map