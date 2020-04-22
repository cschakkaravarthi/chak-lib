"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
exports.OfficesCard = function (props) {
    return (react_1["default"].createElement(Card_1["default"], { className: "card-offices rounded-0" },
        react_1["default"].createElement(Card_1["default"].Body, { className: "d-flex flex-column" },
            react_1["default"].createElement("button", { onClick: props.onCardClick, className: "font-size-base g700-text-clr text-left" },
                react_1["default"].createElement("b", null, props.title)),
            react_1["default"].createElement("button", { onClick: props.onCardClick, className: "font-size-md g600-text-clr text-left" },
                react_1["default"].createElement("b", null, props.address)))));
};
//# sourceMappingURL=officesCard.js.map