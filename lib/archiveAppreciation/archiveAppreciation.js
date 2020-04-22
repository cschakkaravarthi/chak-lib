"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../../scss/_archive-appreciation.scss");
exports.ArchiveAppreciation = function (props) {
    var leftTitle = props.leftTitle, date = props.date, _a = props.MainLink, MainLink = _a === void 0 ? null : _a, wrapperClassName = props.wrapperClassName;
    return (react_1["default"].createElement("div", { className: "archive-appreciation d-flex justify-content-between align-items-baseline border-bottom " + wrapperClassName },
        react_1["default"].createElement("p", { className: "left-content font-weight-bold font-size-base" }, leftTitle),
        react_1["default"].createElement("div", { className: "right-content d-flex justify-content-between align-items-baseline" },
            react_1["default"].createElement("p", { className: "font-weight-bold font-size-sm gray-600" }, date),
            MainLink && (react_1["default"].createElement(MainLink, null,
                react_1["default"].createElement("u", { className: "font-weight-bold font-size-sm text-uppercase" }, "view card"))))));
};
//# sourceMappingURL=archiveAppreciation.js.map