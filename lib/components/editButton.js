"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var Image_1 = __importDefault(require("react-bootstrap/Image"));
var images_1 = require("../assets/images");
exports.EditButton = function (props) {
    return (react_1["default"].createElement(react_bootstrap_1.Button, { className: "edit-button " + (props.className ? props.className : ''), onClick: props.handleClick },
        react_1["default"].createElement(Image_1["default"], { width: 15, height: 15, src: props.imageSrc || images_1.images.editIcon, className: 'pr-1 d-inline' }),
        react_1["default"].createElement("span", { className: 'd-sm-inline order-xl-2 font-size-xs text-uppercase letter-spacing-01rem' }, props.title || 'Edit')));
};
//# sourceMappingURL=editButton.js.map