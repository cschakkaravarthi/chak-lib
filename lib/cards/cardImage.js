"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var encode_1 = require("../common/encode");
exports.CardImage = function (props) {
    return (react_1["default"].createElement("div", { style: { backgroundImage: "url(" + encode_1.encode(props.imageUrl) + ")" }, className: "card-image" }));
};
//# sourceMappingURL=cardImage.js.map