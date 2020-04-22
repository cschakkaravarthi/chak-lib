"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Image_1 = __importDefault(require("react-bootstrap/Image"));
exports.Error = function (props) {
    var backgroundImage = props.backgroundImage, title = props.title, message = props.message, isShowBrowsers = props.isShowBrowsers, chromeImage = props.chromeImage, safariImage = props.safariImage, edgeImage = props.edgeImage;
    return (react_1["default"].createElement("div", { className: "text-center mt-5" },
        react_1["default"].createElement(Image_1["default"], { width: 150, height: 115, src: backgroundImage }),
        react_1["default"].createElement("p", { className: "mt-5 gray-600 font-weight-bold font-size-title" }, title),
        react_1["default"].createElement("p", { className: "font-size-base m-auto align-text-center" }, message),
        isShowBrowsers
            ? react_1["default"].createElement("div", { className: "mt-5 d-flex justify-content-center" },
                react_1["default"].createElement("div", { className: "mr-5" },
                    react_1["default"].createElement(Image_1["default"], { width: 50, height: 50, src: chromeImage }),
                    react_1["default"].createElement("a", { href: "#", className: "d-block font-size-sm text-decoration-underline" }, "Google Chrome")),
                react_1["default"].createElement("div", { className: "mr-5" },
                    react_1["default"].createElement(Image_1["default"], { width: 50, height: 50, src: safariImage }),
                    react_1["default"].createElement("a", { href: "#", className: "d-block font-size-sm text-decoration-underline" }, "Apple Safari")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Image_1["default"], { width: 50, height: 50, src: edgeImage }),
                    react_1["default"].createElement("a", { href: "#", className: "d-block font-size-sm text-decoration-underline" }, "Microsoft Edge")))
            : null));
};
//# sourceMappingURL=error.js.map