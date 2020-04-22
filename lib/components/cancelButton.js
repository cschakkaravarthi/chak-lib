"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
// import { Button } from 'react-bootstrap';
exports.CancelButton = function (props) {
    return (react_1["default"].createElement("button", { className: "cancel-button " + props.className, key: props.uniqueIdentifier, onClick: props.handleClick }, props.title));
};
//# sourceMappingURL=cancelButton.js.map