"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Image_1 = __importDefault(require("react-bootstrap/Image"));
var images_1 = require("../assets/images");
exports.ThumbButton = function (props) {
    var customClass = 'like-icon d-flex align-items-center';
    return (react_1["default"].createElement("button", { className: props.liked ? customClass : 'un' + customClass, onClick: props.handleClick },
        react_1["default"].createElement(Image_1["default"], { width: 14, height: 14, src: props.liked ? images_1.images.likedIcon : images_1.images.unlikedIcon }),
        react_1["default"].createElement("span", { className: "ml-1" }, props.numberOfLikes)));
};
//# sourceMappingURL=thumbButton.js.map