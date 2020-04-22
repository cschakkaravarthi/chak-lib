"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
exports.ReadMoreLinkContainer = function (props) {
    return (react_1["default"].createElement(Card_1["default"].Text, { className: 'font-size-sm my-2 font-weight-bold text-uppercase d-block' }, props.children));
};
//# sourceMappingURL=readMoreLinkContainer.js.map