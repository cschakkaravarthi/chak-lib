"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
exports.SiteLogo = function (props) {
    return (react_1["default"].createElement("button", { onClick: props.handleClick, className: "site-logo" },
        react_1["default"].createElement(react_bootstrap_1.Image, { src: props.logoSrc })));
};
//# sourceMappingURL=siteLogo.js.map