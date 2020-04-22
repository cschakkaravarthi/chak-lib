"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var react_loading_skeleton_1 = __importStar(require("react-loading-skeleton"));
var imageSize = 35;
exports.UserBadge = function (props) {
    var fullName = props.fullName, imageUrl = props.imageUrl, className = props.className, handleClick = props.handleClick, _a = props.isFetching, isFetching = _a === void 0 ? false : _a, _b = props.circleSkeleton, circleSkeleton = _b === void 0 ? true : _b;
    return (react_1["default"].createElement("button", { disabled: isFetching, onClick: handleClick, className: className + " user-badge text-white d-inline-flex align-items-center align-middle" },
        !isFetching ? (react_1["default"].createElement("span", { className: "d-none d-sm-inline order-xl-2 font-weight-bold" }, fullName)) : (react_1["default"].createElement("span", { className: "d-none d-sm-inline order-xl-2 user-badge-skeleton-wrapper" },
            react_1["default"].createElement(react_loading_skeleton_1.SkeletonTheme, { color: "#eee", highlightColor: "#b1b1b1" },
                react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 })))),
        !isFetching ? (react_1["default"].createElement(react_bootstrap_1.Image, { src: imageUrl, alt: fullName, roundedCircle: true, className: "order-xl-1" })) : (react_1["default"].createElement(react_loading_skeleton_1.SkeletonTheme, { color: "#eee", highlightColor: "#b1b1b1" },
            react_1["default"].createElement("span", { className: "" + (circleSkeleton && 'circle-skeleton') },
                react_1["default"].createElement(react_loading_skeleton_1["default"], { circle: true, height: imageSize, width: imageSize }))))));
};
//# sourceMappingURL=userBadge.js.map