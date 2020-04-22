"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
require("../../scss/_media.scss");
var images_1 = require("../assets/images");
exports.MediaSecondary = function (props) {
    var title = props.title, subsection = props.subsection, sectionImageSrc = props.sectionImageSrc;
    return (react_1["default"].createElement(react_bootstrap_1.Media, { bsPrefix: "media" },
        react_1["default"].createElement("img", { width: 64, height: 64, src: sectionImageSrc, alt: "Generic placeholder", className: "mr-4 rounded-circle" }),
        react_1["default"].createElement(react_bootstrap_1.Media.Body, null,
            react_1["default"].createElement("div", { className: 'font-size-lg mt-3' },
                title,
                react_1["default"].createElement("span", { className: "mx-3" },
                    react_1["default"].createElement("img", { src: images_1.images.caretRight, width: 10, height: 30, className: "gray-600 d-inline" })),
                react_1["default"].createElement("span", { className: 'font-weight-bold' }, subsection)))));
};
//# sourceMappingURL=mediaSecondary.js.map