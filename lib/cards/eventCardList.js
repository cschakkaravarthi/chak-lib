"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
exports.ListCard = function (props) {
    var title = props.title, AllEventsLink = props.AllEventsLink, children = props.children;
    return (react_1["default"].createElement(Card_1["default"], { className: "card-event-list rounded-0 border-0" },
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-9" },
                    react_1["default"].createElement(Card_1["default"].Title, { className: "font-size-xl font-weight-bold" }, title)),
                react_1["default"].createElement("div", { className: "col-3" }, AllEventsLink && (react_1["default"].createElement(AllEventsLink, null,
                    react_1["default"].createElement("u", null, "All Events"))))),
            children)));
};
//# sourceMappingURL=eventCardList.js.map