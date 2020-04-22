"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var contentWrapper_1 = require("../components/contentWrapper");
exports.MinimalNewsList = function (props) {
    var title = props.title, children = props.children;
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: title, topBorder: 'lightblue' }, children));
};
//# sourceMappingURL=newsMinimalList.js.map