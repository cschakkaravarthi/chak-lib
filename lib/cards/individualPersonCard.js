"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var cardImage_1 = require("./cardImage");
exports.IndividualPersonCard = function (props) {
    var imageUrl = props.imageUrl, title = props.title, fullName = props.fullName, _a = props.MainLink, MainLink = _a === void 0 ? null : _a;
    return (react_1["default"].createElement(Card_1["default"], { className: "rounded-0 h-100 border-0" },
        imageUrl && MainLink && (react_1["default"].createElement(MainLink, null,
            react_1["default"].createElement(cardImage_1.CardImage, { imageUrl: imageUrl }))),
        react_1["default"].createElement(Card_1["default"].Body, null, MainLink && (react_1["default"].createElement(MainLink, null,
            react_1["default"].createElement("strong", { className: "font-size-base my-2 font-weight-bold text-uppercase d-block text-center" }, fullName),
            react_1["default"].createElement("span", { className: "font-size-sm my-2 text-uppercase d-block text-center" }, title))))));
};
//# sourceMappingURL=individualPersonCard.js.map