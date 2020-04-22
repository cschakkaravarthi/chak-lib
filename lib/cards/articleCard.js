"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var readMoreLinkContainer_1 = require("./readMoreLinkContainer");
var cardImage_1 = require("./cardImage");
var thumbButton_1 = require("../components/thumbButton");
var classnames_1 = __importDefault(require("classnames"));
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
exports.ArticleCard = function (props) {
    var imageUrl = props.imageUrl, title = props.title, date = props.date, _a = props.isFetching, isFetching = _a === void 0 ? false : _a, categories = props.categories, _b = props.MainLink, MainLink = _b === void 0 ? null : _b, _c = props.likes, likes = _c === void 0 ? 0 : _c, handleThumbClick = props.handleThumbClick, _d = props.likedStatus, likedStatus = _d === void 0 ? true : _d, _e = props.fullHeight, fullHeight = _e === void 0 ? true : _e, _f = props.pictureSkeletonHeight, pictureSkeletonHeight = _f === void 0 ? 100 : _f;
    return (react_1["default"].createElement(Card_1["default"], { className: classnames_1["default"]('card-article-standard', 'rounded-0', 'border-0', { 'h-100': fullHeight }) },
        !isFetching ? imageUrl && MainLink && (react_1["default"].createElement(MainLink, null,
            react_1["default"].createElement(cardImage_1.CardImage, { imageUrl: imageUrl }))) : react_1["default"].createElement(react_loading_skeleton_1["default"], { height: pictureSkeletonHeight }),
        react_1["default"].createElement(Card_1["default"].Body, { className: "d-flex justify-content-between flex-column" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Card_1["default"].Title, { className: "my-2 font-weight-bold font-size-base text-condensed" }, !isFetching ? MainLink && react_1["default"].createElement(MainLink, null, title) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 })),
                react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm text-uppercase mb-1 font-weight-bold text-condensed" }, !isFetching ? date : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 })),
                !isFetching ? categories &&
                    categories.map(function (c) { return (react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm gray-600 pr-3 d-inline font-weight-bold text-upper", key: c.drupal_id }, c.title)); }) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 150 })),
            react_1["default"].createElement("div", null,
                !isFetching ? MainLink && (react_1["default"].createElement(readMoreLinkContainer_1.ReadMoreLinkContainer, null,
                    react_1["default"].createElement(MainLink, null,
                        react_1["default"].createElement("u", { className: "letter-spacing" }, "Read More")))) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 }),
                react_1["default"].createElement("div", { className: "d-flex" }, !isFetching
                    ? react_1["default"].createElement(thumbButton_1.ThumbButton, { liked: likedStatus, numberOfLikes: likes, handleClick: handleThumbClick }) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 150 }))))));
};
//# sourceMappingURL=articleCard.js.map