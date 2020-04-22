"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var customCheckbox_1 = require("./customCheckbox");
exports.Textbox = function (props) {
    var label = props.label, type = props.type, className = props.className, name = props.name, value = props.value, controlId = props.controlId, handleChange = props.handleChange, allowCheckbox = props.allowCheckbox, checkboxValue = props.checkboxValue, handleCheckbox = props.handleCheckbox, placeholder = props.placeholder, maxLength = props.maxLength;
    return (react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: controlId },
        allowCheckbox && handleCheckbox && (react_1["default"].createElement("div", { className: "d-flex justify-content-between" },
            react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: className }, label),
            react_1["default"].createElement(customCheckbox_1.CustomCheckbox, { name: name, handleClick: handleCheckbox, checked: checkboxValue, title: "Hide on profile:" }))),
        !allowCheckbox && (react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: className + " font-weight-bold" }, label)),
        react_1["default"].createElement(react_bootstrap_1.Form.Control, { type: type, name: name, value: value, className: "rounded-0", maxLength: maxLength, onChange: handleChange, placeholder: placeholder })));
};
//# sourceMappingURL=textbox.js.map