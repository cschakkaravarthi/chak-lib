"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
require("../../scss/_checkbox.scss");
exports.Checkbox = function (props) {
    return (react_1["default"].createElement(react_bootstrap_1.Form, { onClick: props.handleClick },
        react_1["default"].createElement(react_bootstrap_1.Form.Check, { custom: true, type: 'checkbox', id: props.uniqueIdentifier, label: props.title, checked: props.checked })));
};
//# sourceMappingURL=checkBox.js.map