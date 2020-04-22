"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
exports.highlight = function (text, searchKeyword) {
    var regex = new RegExp('(' + searchKeyword + ')', 'gi');
    if (text && searchKeyword) {
        text = text.replace(regex, '<b>$1</b>');
    }
    else if (!text) {
        text = '';
    }
    return (react_1["default"].createElement("div", { className: "d-inline", dangerouslySetInnerHTML: { __html: text } }));
};
//# sourceMappingURL=cardHelper.js.map