"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../../scss/_archive-appreciation.scss");
var Container_1 = __importDefault(require("react-bootstrap/Container"));
exports.AppreciationCardThumbnail = function (props) {
    var onClick = props.onClick, imgTopSrc = props.imgTopSrc, imgBottomSrc = props.imgBottomSrc;
    return (react_1["default"].createElement(Container_1["default"], { onClick: onClick, className: "appreciation-card-thumbnail-container justify-content-between h-100 border d-flex" },
        react_1["default"].createElement("div", { className: "top-image-container" },
            react_1["default"].createElement("img", { src: imgTopSrc, alt: "", className: "mb-5 pb-md-5" })),
        react_1["default"].createElement("div", { className: "bottom-content-container flex-column-reverse" },
            react_1["default"].createElement("div", { className: "bottom-image-container" },
                react_1["default"].createElement("img", { src: imgBottomSrc, alt: "" })))));
};
//# sourceMappingURL=appreciationCardThumbnail.js.map