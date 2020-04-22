"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../../scss/_date-range-header.scss");
exports.DateRangeHeader = function (props) {
    var leftTitle = props.leftTitle, rightTitle = props.rightTitle, wrapperClassName = props.wrapperClassName;
    return (react_1["default"].createElement("div", { className: "date-range-header d-flex justify-content-between align-items-baseline " + wrapperClassName },
        react_1["default"].createElement("p", null, leftTitle),
        react_1["default"].createElement("p", null, rightTitle)));
};
//# sourceMappingURL=dateRangeHeader.js.map