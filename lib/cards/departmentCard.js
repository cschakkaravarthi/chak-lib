"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
exports.DepartmentCard = function (props) {
    var title = props.title, bodyContent = props.bodyContent, _a = props.VisitLink, VisitLink = _a === void 0 ? null : _a;
    return (react_1["default"].createElement(Card_1["default"], { className: "card-department-standard rounded-0 h-100 border-0" },
        react_1["default"].createElement(Card_1["default"].Title, { className: "text-condensed font-weight-bold card-department-title font-size-base" }, title),
        react_1["default"].createElement(Card_1["default"].Body, { className: "d-flex flex-column justify-content-between" },
            react_1["default"].createElement("div", { className: "d-flex mb-4" },
                react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm" }, bodyContent)),
            VisitLink && (react_1["default"].createElement("div", null,
                react_1["default"].createElement(VisitLink, null,
                    react_1["default"].createElement("u", { className: "font-size-sm text-uppercase letter-spacing" },
                        react_1["default"].createElement("b", null, "Visit Site"))))))));
};
//# sourceMappingURL=departmentCard.js.map