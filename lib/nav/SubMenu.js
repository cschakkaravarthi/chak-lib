"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
require("../../scss/_nav.scss");
exports.SubMenu = function (props) {
    var items = props.items, className = props.className, onSelect = props.onSelect;
    return (react_1["default"].createElement(react_bootstrap_1.Nav, { onSelect: onSelect, bsPrefix: "nav submenu-nav d-flex align-items-center gray-200-bg  " + className },
        react_1["default"].createElement(Container_1["default"], null,
            react_1["default"].createElement(Row_1["default"], null, items.map(function (item) { return (react_1["default"].createElement(react_bootstrap_1.Nav.Item, { bsPrefix: "nav-item border-right border-gray-450 font-weight-bold", key: item.key },
                react_1["default"].createElement(item.Link, { className: "py-1 px-4 " + (item.isActive ? 'active' : '') }))); })))));
};
//# sourceMappingURL=SubMenu.js.map