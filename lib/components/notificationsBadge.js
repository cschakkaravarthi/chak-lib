"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
require("../../scss/_badge.scss");
var images_1 = require("../assets/images");
exports.NotificationsBadge = function (props) {
    return (react_1["default"].createElement("button", { onClick: props.handleClick, className: 'notifications-badge align-middle' },
        react_1["default"].createElement("img", { src: images_1.images.bell, className: 'mr-2 d-inline', width: 15, height: 18 }),
        props.notificationCount > 0 && (react_1["default"].createElement(react_bootstrap_1.Badge, { variant: 'danger', className: "ml-3 d-flex justify-content-center" }, props.notificationCount))));
};
//# sourceMappingURL=notificationsBadge.js.map