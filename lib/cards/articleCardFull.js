"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var cardImage_1 = require("./cardImage");
exports.ArticleCardFull = function (props) {
    var imageUrl = props.imageUrl, title = props.title, subtitle = props.subtitle, date = props.date, categories = props.categories, content = props.content;
    return (react_1["default"].createElement(Card_1["default"], { className: 'card-article-full rounded-0 border-0' },
        imageUrl && (react_1["default"].createElement(cardImage_1.CardImage, { imageUrl: imageUrl })),
        react_1["default"].createElement(Card_1["default"].Body, { className: 'px-3 py-4 p-md-5' },
            react_1["default"].createElement(Card_1["default"].Title, { className: 'font-weight-bold font-size-lg bottom-gap' }, title),
            react_1["default"].createElement(Card_1["default"].Text, { className: 'font-size-sm text-uppercase mb-1 font-weight-bold text-condensed card-date' }, date),
            categories &&
                categories.map(function (c) { return (react_1["default"].createElement(Card_1["default"].Text, { className: 'font-size-sm gray-600 pr-3 d-inline font-weight-bold text-upper', key: c.drupal_id }, c.title)); }),
            react_1["default"].createElement("div", { className: 'article-content top-gap' },
                react_1["default"].createElement(Card_1["default"].Subtitle, { className: 'font-size-base my-2' }, subtitle),
                content))));
};
//# sourceMappingURL=articleCardFull.js.map