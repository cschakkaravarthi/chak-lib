"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Image_1 = __importDefault(require("react-bootstrap/Image"));
exports.NoNotification = function (props) {
    return (react_1["default"].createElement("div", { className: "text-center mt-5" },
        react_1["default"].createElement(Image_1["default"], { width: 100, height: 100, src: props.backgroundImage }),
        react_1["default"].createElement("p", { className: "mt-5 gray-600 font-weight-bold" }, props.title),
        react_1["default"].createElement("p", { className: "font-size-sm" }, props.message)));
};
//# sourceMappingURL=noNotification.js.map