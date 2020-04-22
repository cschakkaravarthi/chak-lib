"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var readMoreLinkContainer_1 = require("./readMoreLinkContainer");
var Col_1 = __importDefault(require("react-bootstrap/Col"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var Image_1 = __importDefault(require("react-bootstrap/Image"));
var cardHelper_1 = require("./cardHelper");
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
exports.LinkSearchCard = function (props) {
    var title = props.title, MainLink = props.MainLink, imageSrc = props.imageSrc, searchSummary = props.searchSummary, _a = props.imageWidth, imageWidth = _a === void 0 ? 30 : _a, _b = props.imageHeight, imageHeight = _b === void 0 ? 30 : _b, _c = props.searchKeyword, searchKeyword = _c === void 0 ? '' : _c, _d = props.isFetching, isFetching = _d === void 0 ? false : _d;
    return (react_1["default"].createElement(Card_1["default"], { className: "card-link-search rounded-0 h-100 border-0" },
        react_1["default"].createElement(Row_1["default"], null,
            react_1["default"].createElement(Col_1["default"], { xs: "12", xl: "12", className: "align-items-center d-flex" },
                react_1["default"].createElement(Card_1["default"].Body, { className: "justify-content-between flex-column" },
                    react_1["default"].createElement(Col_1["default"], { xs: "12", xl: "12" },
                        react_1["default"].createElement(Card_1["default"].Title, { className: "my-2" }, !isFetching && MainLink ? (react_1["default"].createElement(MainLink, null,
                            react_1["default"].createElement(Image_1["default"], { src: imageSrc, width: imageWidth, height: imageHeight, className: "pr-2 mb-1 d-inline" }),
                            ' ',
                            cardHelper_1.highlight(title, searchKeyword),
                            ' ')) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 200 }))),
                        react_1["default"].createElement(Col_1["default"], { xs: "12", xl: "12", className: "mt-2 p-0 font-weight-lighter" }, !isFetching ? (searchSummary) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 270, count: 3 })))),
                    react_1["default"].createElement(Col_1["default"], { xs: "12", xl: "12" }, !isFetching && MainLink ? (react_1["default"].createElement(readMoreLinkContainer_1.ReadMoreLinkContainer, null,
                        react_1["default"].createElement(MainLink, null,
                            react_1["default"].createElement("u", { className: "letter-spacing" }, "View More")))) : (react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 }))))))));
};
//# sourceMappingURL=linkSearchCard.js.map