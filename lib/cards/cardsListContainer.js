"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
exports.CardsListContainer = function (props) {
    var title = props.title, children = props.children, topBorder = props.topBorder, HeaderLink = props.HeaderLink, headerLinkText = props.headerLinkText, _a = props.isFetching, isFetching = _a === void 0 ? false : _a;
    return (react_1["default"].createElement(Card_1["default"], { className: "cards-list-container h-100 border-0 rounded-0 cards-list-top-border-" + topBorder },
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement("div", { className: "d-flex justify-content-between align-items-baseline mb-3" },
                react_1["default"].createElement(Card_1["default"].Title, { className: "font-size-xl font-weight-bold mb-0" }, !isFetching ? title : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 50 })),
                !isFetching ? HeaderLink && (react_1["default"].createElement("div", { className: "font-size-sm gray-600 text-uppercase font-weight-bold" },
                    react_1["default"].createElement(HeaderLink, null,
                        react_1["default"].createElement("u", { className: "gray-600 letter-spacing" }, headerLinkText)))) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 50 })),
            children)));
};
//# sourceMappingURL=cardsListContainer.js.map