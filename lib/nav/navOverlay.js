"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var nav_1 = require("./nav");
var primaryButton_1 = require("../components/primaryButton");
require("../../scss/_nav.scss");
require("../../scss/_modal.scss");
exports.NavOverlay = function (props) {
    return (react_1["default"].createElement(react_bootstrap_1.Modal, { size: "xl", show: props.show, className: 'nav-overlay', onHide: function () { return props.setShow(false); }, "aria-labelledby": "nav-overlay-title", backdropClassName: "all-links-backdrop" },
        react_1["default"].createElement(react_bootstrap_1.Modal.Header, null,
            react_1["default"].createElement(react_bootstrap_1.Row, { className: "w-100" },
                react_1["default"].createElement(react_bootstrap_1.Col, { sm: 12, md: 3, lg: 3, xl: 3, className: "p-2 p-sm-2 p-md-2" },
                    react_1["default"].createElement(react_bootstrap_1.Button, { variant: 'link', className: 'modal-close-button btn-upper text-left', onClick: function () { return props.setShow(false); } },
                        react_1["default"].createElement("span", { className: 'css-icon-x' }),
                        "Close")),
                react_1["default"].createElement(react_bootstrap_1.Col, { sm: 12, md: 6, lg: 6, xl: 6, className: "p-sm-2 p-md-2" }, props.editMode && (react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "font-size-xs gray-600 pl-2 pl-sm-3 m-0" }, "You may select up to 7 links to display in the 'My Links'"),
                    react_1["default"].createElement("p", { className: "font-size-xs gray-600 pl-2 pl-sm-3 m-0" }, "Check/Uncheck the boxes to make your selection")))),
                react_1["default"].createElement(react_bootstrap_1.Col, { sm: 12, md: 3, lg: 3, xl: 3 }, props.editMode ? (react_1["default"].createElement(primaryButton_1.PrimaryButton, { className: 'btn-primary font-size-sm letter-spacing-01rem ml-2 mt-2 ml-sm-3', handleClick: props.handleAdd, title: 'ADD TO MY LINKS' })) : (react_1["default"].createElement(primaryButton_1.PrimaryButton, { className: 'btn-primary font-size-sm letter-spacing-01rem ml-2 mt-2 ml-sm-3', handleClick: props.handleEdit, title: 'EDIT MY LINKS' }))))),
        react_1["default"].createElement(react_bootstrap_1.Modal.Body, null,
            react_1["default"].createElement(react_bootstrap_1.Row, null, props.navGroups.map(function (group) { return (react_1["default"].createElement(react_bootstrap_1.Col, { md: 4, xl: 3, key: group.key },
                react_1["default"].createElement(nav_1.Nav, __assign({}, group, { variant: 'secondary', sectionIcon: group.sectionIcon })))); })))));
};
//# sourceMappingURL=navOverlay.js.map