"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var FAIcon = function (props) {
    var color = props.color, className = props.className, iconSize = props.iconSize, iconName = props.iconName;
    return (react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { color: color, size: iconSize, icon: iconName, className: className }));
};
FAIcon.defaultProps = {
    iconSize: 'sm',
    className: ''
};
exports["default"] = FAIcon;
//# sourceMappingURL=FAIcon.js.map