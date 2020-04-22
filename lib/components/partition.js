"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
exports.Partition = function (props) {
    return (react_1["default"].createElement("div", { className: props.className ? "gray-600 " + props.className : 'gray-600' },
        react_1["default"].createElement("p", { className: "text-upper font-size-md text-center top-gray-border" }, props.message)));
};
//# sourceMappingURL=partition.js.map