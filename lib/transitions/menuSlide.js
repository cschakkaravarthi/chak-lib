"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
require("../../scss/_transitions.scss");
exports.MenuSlideTransition = function (props) {
    return (react_1["default"].createElement(react_transition_group_1.CSSTransition, { timeout: 300, unmountOnExit: true, "in": props.showToggle, classNames: 'slide-menu' }, props.children));
};
//# sourceMappingURL=menuSlide.js.map