"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var images_1 = require("../assets/images");
exports.CloseButton = function (props) {
    return (react_1["default"].createElement(react_bootstrap_1.Button, { variant: "dark", className: 'dark-background p-3 menu-toggler', onClick: props.handleClick },
        react_1["default"].createElement("img", { src: images_1.images.close, width: 50, height: 50 })));
};
//# sourceMappingURL=closeButton.js.map