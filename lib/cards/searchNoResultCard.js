"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var readMoreLinkContainer_1 = require("./readMoreLinkContainer");
exports.SearchNoResultCard = function (props) {
    var title = props.title, description = props.description, MainLink = props.MainLink;
    return (react_1["default"].createElement(Card_1["default"], { className: 'card-search-no-result rounded-0 h-100' },
        react_1["default"].createElement("div", { className: 'row' },
            react_1["default"].createElement("div", { className: 'col-12 col-xl-12 align-items-center d-flex' },
                react_1["default"].createElement(Card_1["default"].Body, { className: 'justify-content-between flex-column' },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Card_1["default"].Title, { className: 'my-2 font-weight-bold' }, MainLink && react_1["default"].createElement(MainLink, null, title)),
                        react_1["default"].createElement(Card_1["default"].Text, { className: 'mt-2 font-weight-lighter no-result-body' }, description)),
                    react_1["default"].createElement("div", null, MainLink && (react_1["default"].createElement(readMoreLinkContainer_1.ReadMoreLinkContainer, null,
                        react_1["default"].createElement(MainLink, null,
                            react_1["default"].createElement("u", { className: 'text-uppercase' }, "Browse"))))))))));
};
//# sourceMappingURL=searchNoResultCard.js.map