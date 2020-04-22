"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
require("../../scss/_media.scss");
exports.MediaPrimary = function (props) {
    var title = props.title, bodyText = props.bodyText, sectionImageSrc = props.sectionImageSrc;
    return (react_1["default"].createElement(react_bootstrap_1.Media, { bsPrefix: "media" },
        react_1["default"].createElement("img", { width: 64, height: 64, alt: title, src: sectionImageSrc, className: 'mr-4 rounded-circle mt-3' }),
        react_1["default"].createElement(react_bootstrap_1.Media.Body, null,
            react_1["default"].createElement("p", { className: 'font-weight-bold font-size-lg' }, title),
            react_1["default"].createElement("p", { className: 'font-size-base' }, bodyText))));
};
//# sourceMappingURL=mediaPrimary.js.map