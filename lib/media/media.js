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
var mediaPrimary_1 = require("./mediaPrimary");
var mediaSecondary_1 = require("./mediaSecondary");
exports.Media = function (props) {
    var _a = props.variant, variant = _a === void 0 ? 'primary' : _a;
    switch (variant) {
        case 'primary':
            return react_1["default"].createElement(mediaPrimary_1.MediaPrimary, __assign({}, props));
        case 'secondary':
            return react_1["default"].createElement(mediaSecondary_1.MediaSecondary, __assign({}, props));
    }
    return null;
};
//# sourceMappingURL=media.js.map