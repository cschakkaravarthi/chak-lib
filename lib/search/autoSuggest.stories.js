"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var autoSuggest_1 = require("./autoSuggest");
exports["default"] = {
    component: autoSuggest_1.AutoSuggest,
    title: 'autoSuggest'
};
exports.autoSuggest = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement("div", { className: 'dark-background' },
        react_1["default"].createElement(autoSuggest_1.AutoSuggest, { handleSubmit: function () { alert('clicked'); }, miniNoOfCharsShowSuggestions: 2, suggestions: [], handleSelected: function () { }, getSuggestions: function () { }, manualSearch: function () { }, suggestionValue: "", onSuggestionsClearRequested: function () { } })))); };
exports.searchBarMobile = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(autoSuggest_1.AutoSuggest, { handleSubmit: function () { alert('clicked'); }, miniNoOfCharsShowSuggestions: 2, suggestions: [], handleSelected: function () { }, getSuggestions: function () { }, manualSearch: function () { }, suggestionValue: "", onSuggestionsClearRequested: function () { }, isMobileSearchBar: true }))); };
//# sourceMappingURL=autoSuggest.stories.js.map