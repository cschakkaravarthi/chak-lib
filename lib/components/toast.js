"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../../scss/_toast.scss");
exports.Toast = function (props) {
    var message = props.message, variant = props.variant, className = props.className;
    return (react_1["default"].createElement("div", { className: "toast toast-" + variant + " " + className }, message));
};
//# sourceMappingURL=toast.js.map