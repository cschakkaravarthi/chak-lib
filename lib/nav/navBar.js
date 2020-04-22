"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../../scss/_nav.scss");
exports.NavBarSection = function (props) {
    return (react_1["default"].createElement("div", { className: "navbar-section navbar-section-" + props.variant + " " + props.className }, props.children));
};
exports.NavBar = function (props) {
    var isTop = props.variant === 'top';
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isTop && react_1["default"].createElement("div", { className: 'nav-placeholder-top' }),
        react_1["default"].createElement("div", { className: isTop ? 'navbar-top' : 'navbar-side' }, props.children)));
};
//# sourceMappingURL=navBar.js.map