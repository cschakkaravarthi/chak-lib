"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
exports.HamburgerButton = function (props) {
    return (react_1["default"].createElement("div", { className: "mr-3 ml-3 position-relative " + (props.open ? 'hamburger nav_open ' : 'hamburger'), onClick: props.handleClick },
        react_1["default"].createElement("span", { className: "position-absolute" }),
        react_1["default"].createElement("span", { className: "position-absolute" }),
        react_1["default"].createElement("span", { className: "position-absolute" }),
        react_1["default"].createElement("span", { className: "position-absolute" })));
};
//# sourceMappingURL=hamburgerButton.js.map