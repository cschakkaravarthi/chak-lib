"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
exports.AllLinksButton = function (props) {
    return (react_1["default"].createElement("button", { onClick: props.handleClick, className: 'd-inline-flex align-items-center align-middle btn-upper dark-background text-white' },
        react_1["default"].createElement("img", { src: props.imageSrc, className: 'd-md-inline order-md-2 all-links-image' }),
        react_1["default"].createElement("span", { className: "font-size-sm m-3" }, "All Links")));
};
//# sourceMappingURL=allLinksButton.js.map