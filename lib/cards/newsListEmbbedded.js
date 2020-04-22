"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var cardImage_1 = require("./cardImage");
var react_bootstrap_1 = require("react-bootstrap");
exports.NewsListEmbedded = function (props) {
    var title = props.title, date = props.date, imageUrl = props.imageUrl, MainLink = props.MainLink;
    return (react_1["default"].createElement(Card_1["default"], { className: "news-list-embedded border-0 mb-4 px-0" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement(react_bootstrap_1.Col, { xs: 5 }, MainLink && imageUrl && (react_1["default"].createElement(MainLink, null,
                react_1["default"].createElement(cardImage_1.CardImage, { imageUrl: imageUrl })))),
            react_1["default"].createElement(react_bootstrap_1.Col, { bsPrefix: "d-flex flex-column col-7" },
                react_1["default"].createElement(Card_1["default"].Title, { className: "font-weight-bold mb-2" }, title),
                react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm gray-600 font-weight-bold text-uppercase mb-1 text-condensed" }, date),
                react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm font-weight-bold text-uppercase mb-1" }, MainLink && (react_1["default"].createElement(MainLink, null,
                    react_1["default"].createElement("u", { className: "letter-spacing" }, "Read More"))))))));
};
//# sourceMappingURL=newsListEmbbedded.js.map