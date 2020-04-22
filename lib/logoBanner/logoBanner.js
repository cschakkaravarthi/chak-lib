"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Image_1 = __importDefault(require("react-bootstrap/Image"));
require("../../scss/_banner.scss");
exports.LogoBanner = function (props) {
    return (react_1["default"].createElement("div", { style: { backgroundImage: "url(" + props.bannerSrc + ")" }, className: "banner-props" },
        react_1["default"].createElement("div", { className: "banner-props dark-linear-gradient d-flex justify-content-end" },
            react_1["default"].createElement("div", { className: "d-flex align-items-center mx-lg-5 mx-sm-5 mx-3" },
                react_1["default"].createElement(Image_1["default"], { className: "logo-props", src: props.logoSrc, rounded: true })))));
};
//# sourceMappingURL=logoBanner.js.map