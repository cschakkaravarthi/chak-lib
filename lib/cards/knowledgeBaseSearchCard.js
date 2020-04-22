"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var readMoreLinkContainer_1 = require("./readMoreLinkContainer");
var contentWrapper_1 = require("../components/contentWrapper");
var cardHelper_1 = require("./cardHelper");
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
exports.KnowledgeBaseSearchCard = function (props) {
    var date = props.date, title = props.title, MainLink = props.MainLink, authorName = props.authorName, searchSummary = props.searchSummary, _a = props.searchKeyword, searchKeyword = _a === void 0 ? '' : _a, _b = props.isFetching, isFetching = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: "", showContentTop: false, topBorder: "darkTurquoise", wrapperClass: "card-knowledge-base-search-result" },
        react_1["default"].createElement("div", { className: "justify-content-between flex-column" },
            react_1["default"].createElement(Card_1["default"].Title, { className: "" }, !isFetching && MainLink ? (react_1["default"].createElement(MainLink, null, cardHelper_1.highlight(title, searchKeyword))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 140 }))),
            react_1["default"].createElement(Card_1["default"].Text, { className: "mt-2 font-weight-lighter" },
                react_1["default"].createElement("span", { className: "pr-3" }, !isFetching ? authorName : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 130 })),
                react_1["default"].createElement("span", null, !isFetching ? date : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 130 }))),
            react_1["default"].createElement(Card_1["default"].Text, { className: "mt-2 p-0 font-weight-lighter" }, !isFetching ? searchSummary : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 185, count: 3 })),
            !isFetching && MainLink ? (react_1["default"].createElement(readMoreLinkContainer_1.ReadMoreLinkContainer, null,
                react_1["default"].createElement(MainLink, null,
                    react_1["default"].createElement("u", { className: "text-uppercase letter-spacing" }, "View More")))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 })))));
};
//# sourceMappingURL=knowledgeBaseSearchCard.js.map