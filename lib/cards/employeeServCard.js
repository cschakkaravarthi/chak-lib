"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var cardImage_1 = require("./cardImage");
exports.EmployeeServCard = function (props) {
    var title = props.title, summary = props.summary, VisitLink = props.VisitLink, linkText = props.linkText, _a = props.imageUrl, imageUrl = _a === void 0 ? null : _a;
    return (react_1["default"].createElement(Card_1["default"], { className: 'card-employee-standard rounded-0 border-0 flex-row h-100' },
        react_1["default"].createElement(Card_1["default"].Title, { className: 'text-condensed font-weight-bold card-employee-title font-size-base' }, title),
        react_1["default"].createElement("div", { className: "card-employee-body" },
            imageUrl && (react_1["default"].createElement(cardImage_1.CardImage, { imageUrl: imageUrl })),
            react_1["default"].createElement(Card_1["default"].Body, { className: "card-employee-body-content d-flex flex-column justify-content-between" },
                react_1["default"].createElement(Card_1["default"].Text, { className: 'font-size-sm' }, summary),
                VisitLink && (react_1["default"].createElement(VisitLink, null,
                    react_1["default"].createElement("u", { className: 'font-size-sm letter-spacing' },
                        react_1["default"].createElement("b", null, linkText))))))));
};
//# sourceMappingURL=employeeServCard.js.map