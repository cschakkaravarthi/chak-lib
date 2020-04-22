"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
exports.SecondaryButton = function (props) {
    return (react_1["default"].createElement(react_bootstrap_1.Button, { variant: 'outline-secondary', className: 'btn-secondary font-weight-bold text-uppercase letter-spacing-01rem', onClick: props.handleClick },
        react_1["default"].createElement("span", { className: 'd-sm-inline order-xl-2' }, props.title)));
};
//# sourceMappingURL=secondaryButton.js.map