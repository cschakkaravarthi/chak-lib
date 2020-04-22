"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
exports.Textarea = function (props) {
    var label = props.label, className = props.className, name = props.name, rows = props.rows, value = props.value, controlId = props.controlId, maxLength = props.maxLength, handleChange = props.handleChange, textareaClassName = props.textareaClassName;
    return (react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: controlId },
        react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: className }, label),
        react_1["default"].createElement(react_bootstrap_1.Form.Control, { className: textareaClassName, as: 'textarea', maxLength: maxLength, rows: rows, name: name, value: value, onChange: handleChange })));
};
//# sourceMappingURL=textarea.js.map