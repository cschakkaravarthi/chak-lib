"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
exports.FooterFeedbackView = function (props) {
    return (react_1["default"].createElement("div", { className: "footer-container w-100 text-sm-right text-center d-flex flex-column justify-content-center" },
        react_1["default"].createElement(react_bootstrap_1.Container, null,
            react_1["default"].createElement("a", { href: props.hrefLink, target: "new", className: 'd-sm-inline order-xl-2 btn-secondary btn-feedback font-weight-bold text-uppercase letter-spacing-01rem' }, props.title))));
};
//# sourceMappingURL=footerFeedbackView.js.map