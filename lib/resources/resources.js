"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var react_bootstrap_1 = require("react-bootstrap");
var images_1 = require("../assets/images");
exports.Resources = function (props) {
    var _a = props.MainLink, MainLink = _a === void 0 ? null : _a, mainLinkText = props.mainLinkText, extension = props.extension, _b = props.external, external = _b === void 0 ? !extension : _b;
    return (react_1["default"].createElement(Card_1["default"], { className: 'rounded-0 p-2' }, MainLink && (react_1["default"].createElement(MainLink, null,
        react_1["default"].createElement(react_bootstrap_1.Row, { className: 'w-100 d-flex justify-content-between m-0 p-0 align-items-center' },
            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 9, md: 9, lg: 9, xl: 9 },
                react_1["default"].createElement("strong", { className: 'font-size-sm' }, mainLinkText)),
            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 3, md: 3, lg: 3, xl: 3, className: 'text-right' },
                extension && (react_1["default"].createElement("div", { className: 'pr-1 gray-600 d-inline text-uppercase text-right text-nowrap font-size-sm' },
                    react_1["default"].createElement("strong", null, extension))),
                external && (react_1["default"].createElement("img", { src: images_1.images.external, width: 20, height: 20 }))))))));
};
//# sourceMappingURL=resources.js.map