"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var readMoreLinkContainer_1 = require("./readMoreLinkContainer");
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var Col_1 = __importDefault(require("react-bootstrap/Col"));
var cardHelper_1 = require("./cardHelper");
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
exports.TechCatalogSearchCard = function (props) {
    var title = props.title, rate = props.rate, MainLink = props.MainLink, searchSummary = props.searchSummary, _a = props.searchKeyword, searchKeyword = _a === void 0 ? '' : _a, _b = props.isFetching, isFetching = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(Card_1["default"], { className: "card-tech-catalog-search-result rounded-0 h-100 border-0" },
        react_1["default"].createElement(Row_1["default"], null,
            react_1["default"].createElement(Col_1["default"], { xs: "12", xl: "12", className: "align-items-center d-flex" },
                react_1["default"].createElement(Card_1["default"].Body, { className: "justify-content-between flex-column" },
                    react_1["default"].createElement(Col_1["default"], { xs: "12", xl: "12" },
                        react_1["default"].createElement(Card_1["default"].Title, { className: "my-2" }, !isFetching && MainLink ? (react_1["default"].createElement(MainLink, null, cardHelper_1.highlight(title, searchKeyword))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 150 }))),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "mt-2 font-weight-lighter" }, rate),
                        react_1["default"].createElement(Col_1["default"], { xs: "12", xl: "12", className: "mt-2 p-0 font-weight-lighter" }, !isFetching ? (searchSummary) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 150, count: 3 })))),
                    react_1["default"].createElement(Col_1["default"], { xs: "12", xl: "12" }, !isFetching && MainLink ? (react_1["default"].createElement(readMoreLinkContainer_1.ReadMoreLinkContainer, null,
                        react_1["default"].createElement(MainLink, null,
                            react_1["default"].createElement("u", { className: "text-uppercase letter-spacing" }, "Order now")))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 }))))))));
};
//# sourceMappingURL=techCatalogSearchCard.js.map