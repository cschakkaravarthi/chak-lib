"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var react_bootstrap_1 = require("react-bootstrap");
var images_1 = require("../assets/images");
exports.MyContacts = function (props) {
    var title = props.title, office = props.office, mobile = props.mobile, email = props.email, handleClick = props.handleClick, contactPic = props.contactPic, LinkToProfile = props.LinkToProfile;
    return (react_1["default"].createElement(Card_1["default"], { className: "h-100 card-light-border card-contact rounded-0" },
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement("div", { className: "d-flex justify-content-between" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(react_bootstrap_1.Image, { src: contactPic, roundedCircle: true, className: "mb-3", width: 50, height: 50 }),
                    react_1["default"].createElement(Card_1["default"].Title, { className: "ml-4 d-inline font-weight-bold text-capitalize text-condensed align-text-top" }, LinkToProfile && react_1["default"].createElement(LinkToProfile, null, title))),
                handleClick &&
                    react_1["default"].createElement(react_bootstrap_1.Image, { src: images_1.images.remove, width: 20, height: 20, onClick: handleClick, className: "cursor-pointer" })),
            react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm" },
                react_1["default"].createElement("div", { className: "mb-2" },
                    react_1["default"].createElement("span", { className: "text-upper text-secondary d-inline-block" }, "Office"),
                    react_1["default"].createElement("a", { href: "tel:" + office, className: "" }, office)),
                react_1["default"].createElement("div", { className: "mb-2" },
                    react_1["default"].createElement("span", { className: "text-upper text-secondary d-inline-block" }, "Mobile"),
                    react_1["default"].createElement("a", { href: "tel:" + mobile, className: "" }, mobile)),
                react_1["default"].createElement("div", { className: "mb-2 d-flex align-items-baseline" },
                    react_1["default"].createElement("span", { className: "text-upper text-secondary d-inline-block" }, "Email"),
                    react_1["default"].createElement("a", { href: "mailto:" + email, className: " text-break" }, email))))));
};
//# sourceMappingURL=myContacts.js.map