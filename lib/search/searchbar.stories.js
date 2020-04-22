"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var searchbar_1 = require("./searchbar");
exports["default"] = {
    component: searchbar_1.SearchBar,
    title: 'Search Bar'
};
exports.searchbar = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement("div", { className: 'dark-background' },
        react_1["default"].createElement(searchbar_1.SearchBar, { handleSubmit: function () { alert('clicked'); }, handleChange: function () { alert('clicked'); }, searchTerm: '' })))); };
//# sourceMappingURL=searchbar.stories.js.map