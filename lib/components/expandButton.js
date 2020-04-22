"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
exports.ExpandButton = function (props) {
    return (react_1["default"].createElement(react_bootstrap_1.Button, { className: 'expand-button border-0 text-decoration-line h-100 p-0 position-relative shadow-none', onClick: props.handleClick },
        react_1["default"].createElement("span", { className: 'd-sm-inline order-xl-2 text-uppercase letter-spacing-01rem' },
            react_1["default"].createElement("u", null, props.title))));
};
//# sourceMappingURL=expandButton.js.map