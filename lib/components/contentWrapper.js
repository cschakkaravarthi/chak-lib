"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
exports.ContentWrapper = function (props) {
    var title = props.title, children = props.children, subtitle = props.subtitle, bodyClass = props.bodyClass, wrapperClass = props.wrapperClass, RightCornerComponent = props.RightCornerComponent, _a = props.showContentTop, showContentTop = _a === void 0 ? true : _a, _b = props.topBorder, topBorder = _b === void 0 ? 'lightblue' : _b, rightCornerComponentText = props.rightCornerComponentText, _c = props.subtitleClass, subtitleClass = _c === void 0 ? 'gray-600 font-size-sm' : _c, _d = props.titleClass, titleClass = _d === void 0 ? 'font-size-xl font-weight-bold' : _d;
    return (react_1["default"].createElement(Card_1["default"], { className: wrapperClass + " content-wrapper-top-border-" + topBorder + " rounded-0 border-0" },
        react_1["default"].createElement(Card_1["default"].Body, { className: bodyClass },
            showContentTop ? (react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: RightCornerComponent ? 'col-9' : 'col-12' },
                    title && (react_1["default"].createElement(Card_1["default"].Title, { className: titleClass }, title)),
                    subtitle && react_1["default"].createElement("span", { className: subtitleClass }, subtitle)),
                RightCornerComponent && (react_1["default"].createElement("div", { className: "col-3" },
                    react_1["default"].createElement(RightCornerComponent, null,
                        react_1["default"].createElement("u", null, rightCornerComponentText)))))) : null,
            children)));
};
//# sourceMappingURL=contentWrapper.js.map