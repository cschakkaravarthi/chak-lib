"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../../scss/_archive-appreciation.scss");
var Container_1 = __importDefault(require("react-bootstrap/Container"));
exports.AppreciationCard = function (props) {
    var title = props.title, onClick = props.onClick, imgTopSrc = props.imgTopSrc, senderName = props.senderName, imgBottomSrc = props.imgBottomSrc, appreciationText = props.appreciationText;
    return (react_1["default"].createElement(Container_1["default"], { onClick: onClick, className: "appreciation-card-container h-100 border d-flex" },
        react_1["default"].createElement("div", { className: "top-image-container" },
            react_1["default"].createElement("img", { src: imgTopSrc, alt: "", className: "mb-5 pb-md-5" }),
            react_1["default"].createElement("div", { className: "bottom-text-container" },
                react_1["default"].createElement("p", { className: "mb-0" },
                    react_1["default"].createElement("strong", null,
                        title,
                        ",")),
                react_1["default"].createElement("p", { className: "font-size-sm" }, appreciationText),
                react_1["default"].createElement("p", { className: "text-right" },
                    react_1["default"].createElement("strong", null,
                        "- ",
                        senderName)))),
        react_1["default"].createElement("div", { className: "bottom-content-container flex-column-reverse" },
            react_1["default"].createElement("div", { className: "bottom-image-container" },
                react_1["default"].createElement("img", { src: imgBottomSrc, alt: "" })))));
};
//# sourceMappingURL=appreciationCard.js.map