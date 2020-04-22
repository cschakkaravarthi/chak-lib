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
var officesCard_1 = require("./officesCard");
var contentWrapper_1 = require("../components/contentWrapper");
exports.OfficesListContainer = function (props) {
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: "", topBorder: "darkTurquoise" }, props.officeData &&
        props.officeData.map(function (item) { return (react_1["default"].createElement("div", { key: item.drupal_id },
            item.placeName !== '' && (react_1["default"].createElement("p", { className: "font-size-base g700-text-clr offices-subheader" },
                react_1["default"].createElement("b", null, item.placeName))),
            react_1["default"].createElement("div", { className: "d-flex flex-wrap" }, item.officeList &&
                item.officeList.map(function (office) { return (react_1["default"].createElement(officesCard_1.OfficesCard, __assign({}, office, { key: office.drupal_id, onCardClick: function () {
                        props.onCardClick && props.onCardClick(office);
                    } }))); })))); })));
};
//# sourceMappingURL=officesListContainer.js.map