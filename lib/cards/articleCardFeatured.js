"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
var readMoreLinkContainer_1 = require("./readMoreLinkContainer");
var cardImage_1 = require("./cardImage");
var thumbButton_1 = require("../components/thumbButton");
exports.ArticleCardFeatured = function (props) {
    var imageUrl = props.imageUrl, title = props.title, date = props.date, summary = props.summary, categories = props.categories, MainLink = props.MainLink, _a = props.likes, likes = _a === void 0 ? 0 : _a, handleThumbClick = props.handleThumbClick, _b = props.isFetching, isFetching = _b === void 0 ? false : _b, _c = props.likedStatus, likedStatus = _c === void 0 ? true : _c, _d = props.pictureSkeletonHeight, pictureSkeletonHeight = _d === void 0 ? 100 : _d;
    return (react_1["default"].createElement(Card_1["default"], { className: "card-article-featured rounded-0 h-100 border-0" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col-12 col-xl-6" }, !isFetching ? imageUrl && MainLink && (react_1["default"].createElement(MainLink, null,
                react_1["default"].createElement(cardImage_1.CardImage, { imageUrl: imageUrl }))) : react_1["default"].createElement(react_loading_skeleton_1["default"], { height: pictureSkeletonHeight })),
            react_1["default"].createElement("div", { className: "col-12 col-xl-6 align-items-center d-flex" },
                react_1["default"].createElement(Card_1["default"].Body, { className: "justify-content-between flex-column" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Card_1["default"].Title, { className: "my-2 font-weight-bold" }, !isFetching ? MainLink && react_1["default"].createElement(MainLink, null, title) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 375, count: 2 })),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm text-uppercase mb-1 font-weight-bold text-condensed card-date" }, !isFetching ? date : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 200 })),
                        !isFetching ? categories &&
                            categories.map(function (c) { return (react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm gray-600 pr-3 d-inline font-weight-bold text-upper", key: c.drupal_id }, c.title)); }) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 150 }),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "mt-2 font-weight-lighter article-body" }, !isFetching ? summary : react_1["default"].createElement(react_loading_skeleton_1["default"], { count: 3, width: 390 }))),
                    react_1["default"].createElement("div", null,
                        !isFetching ? MainLink && (react_1["default"].createElement(readMoreLinkContainer_1.ReadMoreLinkContainer, null,
                            react_1["default"].createElement(MainLink, null,
                                react_1["default"].createElement("u", { className: "letter-spacing" }, "Read More")))) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 }),
                        react_1["default"].createElement("div", { className: "d-flex" }, !isFetching
                            ? react_1["default"].createElement(thumbButton_1.ThumbButton, { liked: likedStatus, numberOfLikes: likes, handleClick: handleThumbClick }) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 25 }))))))));
};
//# sourceMappingURL=articleCardFeatured.js.map