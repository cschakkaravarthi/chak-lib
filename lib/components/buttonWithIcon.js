"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
exports.ButtonWithIcon = function (props) {
    var className = props.className, uniqueIdentifier = props.uniqueIdentifier, handleClick = props.handleClick, title = props.title, imageSrc = props.imageSrc, _a = props.imageWidth, imageWidth = _a === void 0 ? 20 : _a, _b = props.imageHeight, imageHeight = _b === void 0 ? 20 : _b, _c = props.labelClassName, labelClassName = _c === void 0 ? 'gray-600' : _c;
    return (react_1["default"].createElement("button", { className: "font-size-sm " + className, key: uniqueIdentifier, onClick: handleClick },
        imageSrc && react_1["default"].createElement(react_bootstrap_1.Image, { src: imageSrc, width: imageWidth, height: imageHeight }),
        react_1["default"].createElement("span", { className: "pl-2 " + labelClassName }, title)));
};
//# sourceMappingURL=buttonWithIcon.js.map