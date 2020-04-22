"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
exports.BasicQuickToolsCard = function (props) {
    var title = props.title, Links = props.Links, _a = props.isFetching, isFetching = _a === void 0 ? false : _a;
    return (react_1["default"].createElement(Card_1["default"], { className: "py-4 px-3 flex-column justify-content-between h-100 rounded-0" },
        react_1["default"].createElement(Card_1["default"].Title, { className: "font-weight-bold text-capitalize text-condensed font-size-base mb-4" }, !isFetching ? title : react_1["default"].createElement(react_loading_skeleton_1["default"], { height: 30 })),
        !isFetching ? Links && Links.map(function (linkData) { return (react_1["default"].createElement(linkData.linkAction, { key: linkData.linkTitle },
            react_1["default"].createElement("u", { className: "text-upper gray-600 font-size-sm letter-spacing" }, linkData.linkTitle))); }) : react_1["default"].createElement(react_loading_skeleton_1["default"], null)));
};
//# sourceMappingURL=quickToolsCard.js.map