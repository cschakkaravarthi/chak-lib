"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var Image_1 = __importDefault(require("react-bootstrap/Image"));
require("../../scss/_nav.scss");
exports.Nav = function (props) {
    var _a = props.variant, variant = _a === void 0 ? 'primary' : _a;
    return (react_1["default"].createElement(react_bootstrap_1.Nav, { className: "nav-" + variant + " " + props.className, key: props.key },
        props.sectionTitle && (react_1["default"].createElement("div", { className: "nav-section-title pt-0 font-weight-bold" },
            props.sectionIcon && (react_1["default"].createElement(Image_1["default"], { className: "pr-2 black d-inline all-links-overlay-icon", src: props.sectionIcon })),
            react_1["default"].createElement("span", { className: "w-75" }, props.sectionTitle),
            props.editLink && (react_1["default"].createElement("div", { className: "d-inline w-25 float-right text-right" },
                react_1["default"].createElement(props.editLink, null))))),
        props.sectionLink && (react_1["default"].createElement("div", { className: "nav-section-link" },
            react_1["default"].createElement(props.sectionLink, null))),
        react_1["default"].createElement("ul", { className: "list-unstyled mb-0" }, props.items.map(function (item) { return (react_1["default"].createElement("li", { key: item.key },
            react_1["default"].createElement(item.Link, null))); }))));
};
//# sourceMappingURL=nav.js.map