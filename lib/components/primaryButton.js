"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
exports.PrimaryButton = function (props) {
    return (react_1["default"].createElement(react_bootstrap_1.Button, { className: "btn-primary font-size-sm letter-spacing-01rem font-weight-bold text-uppercase " + props.className, onClick: props.handleClick }, props.title));
};
//# sourceMappingURL=primaryButton.js.map