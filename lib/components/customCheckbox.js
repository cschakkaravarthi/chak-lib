"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../../scss/_checkbox.scss");
exports.CustomCheckbox = function (props) {
    return (react_1["default"].createElement("div", { className: "left-label-checkbox " + props.className, onClick: props.handleClick },
        react_1["default"].createElement("label", { className: props.checked ? 'checked' : '' }, props.title),
        react_1["default"].createElement("input", { name: props.name, type: "checkbox", id: props.uniqueIdentifier, checked: props.checked })));
};
//# sourceMappingURL=customCheckbox.js.map