"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("react-bootstrap/Button"));
require("../../scss/_alphabetical-line.scss");
exports.AlphabeticalLine = function (props) {
    return (react_1["default"].createElement(Button_1["default"], { variant: "link", id: props.letter, value: props.letter, onClick: props.onClick, className: "font-weight-bolder " + props.className + " " + (props.isActive ? 'is-active' : '') }, props.letter));
};
//# sourceMappingURL=alphabeticalLine.js.map