"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var uploadButton_1 = require("../components/uploadButton");
var images_1 = require("../assets/images");
require("../../scss/_archive-appreciation.scss");
exports.CreateAppreciationCard = function (props) {
    var title = props.title, altImg = props.altImg, onClick = props.onClick;
    return (react_1["default"].createElement("div", { className: "create-appreciation-card-container container d-flex bg-gradient-dark p-1 py-sm-5 px-sm-5 px-lg-3 py-3", style: {
            backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(" + images_1.images.createCard + ")"
        } },
        react_1["default"].createElement("div", { className: "left-content" },
            react_1["default"].createElement("img", { src: images_1.images.cardsCouple, alt: altImg })),
        react_1["default"].createElement("div", { className: "right-content text-right" },
            react_1["default"].createElement("p", { className: "text-white font-weight-bold font-size-lg mb-1" }, "Know someone who deserves a round of\u00A0applause?"),
            react_1["default"].createElement("p", { className: "text-white mb-3" }, "Show your support. Send an Appreciation\u00A0Card\u00A0today!"),
            react_1["default"].createElement(uploadButton_1.UploadButton, { className: "primary-button", title: title, handleClick: onClick }))));
};
//# sourceMappingURL=createAppreciationCard.js.map