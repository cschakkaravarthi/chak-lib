"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var contentWrapper_1 = require("../components/contentWrapper");
var uploadButton_1 = require("../components/uploadButton");
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
exports.AppreciationCardNotification = function (props) {
    var title = props.title, onClick = props.onClick, className = props.className, wrapperClass = props.wrapperClass, _a = props.buttonTitle, buttonTitle = _a === void 0 ? 'View Card' : _a, _b = props.isFetching, isFetching = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: "", showContentTop: false, topBorder: "darkTurquoise", wrapperClass: "" + wrapperClass, bodyClass: "d-flex justify-content-between align-items-center" },
        !isFetching ? react_1["default"].createElement("p", { className: "font-weight-bold p-0 m-0 " + className }, title) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 200 }),
        !isFetching
            ? react_1["default"].createElement(uploadButton_1.UploadButton, { title: buttonTitle, handleClick: onClick, className: "primary-button text-uppercase btn-sm" })
            : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100, height: 30 })));
};
//# sourceMappingURL=appreciationCardNotification.js.map