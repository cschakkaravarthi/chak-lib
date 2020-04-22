"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
exports.UploadButton = function (props) {
    return (react_1["default"].createElement("button", { id: props.uniqueIdentifier, className: "upload-button font-weight-bold text-uppercase letter-spacing-01rem " + props.className, onClick: props.handleClick }, props.title));
};
//# sourceMappingURL=uploadButton.js.map