"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var images_1 = require("../assets/images");
var cardHelper_1 = require("./cardHelper");
exports.EventSearchCard = function (props) {
    var title = props.title, date = props.date, location = props.location, _a = props.MainLink, MainLink = _a === void 0 ? null : _a, _b = props.MoreInfoLink, MoreInfoLink = _b === void 0 ? null : _b, AddToCalenderLink = props.AddToCalenderLink, SendInviteEventData = props.SendInviteEventData, _c = props.searchKeyword, searchKeyword = _c === void 0 ? '' : _c;
    return (react_1["default"].createElement(Card_1["default"], { className: 'card-event-search rounded-0 h-100' },
        react_1["default"].createElement("div", { className: 'row' },
            react_1["default"].createElement("div", { className: 'col-12 col-xl-12 align-items-center d-flex' },
                react_1["default"].createElement(Card_1["default"].Body, { className: 'justify-content-between flex-column' },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Card_1["default"].Title, { className: 'mb-2' }, MainLink && react_1["default"].createElement(MainLink, null, cardHelper_1.highlight(title, searchKeyword))),
                        react_1["default"].createElement(Card_1["default"].Text, { className: 'mt-2 font-weight-lighter' }, date),
                        react_1["default"].createElement(Card_1["default"].Text, { className: 'mt-2 font-weight-lighter' }, location)),
                    react_1["default"].createElement("div", { className: "row ml-1" },
                        react_1["default"].createElement("button", { onClick: AddToCalenderLink },
                            react_1["default"].createElement("img", { src: images_1.images.calendar, width: 15, height: 15, className: 'mr-2 gray-600 d-inline' }),
                            react_1["default"].createElement(Card_1["default"].Text, { className: 'font-size-xs gray-600 d-inline pr-1' },
                                react_1["default"].createElement("u", null, "Add to Calendar")))),
                    react_1["default"].createElement("div", { className: "d-flex flex-column align-items-start align-items-sm-front w-100 ml-1 pl-sm-0 pr-sm-2" },
                        react_1["default"].createElement(Card_1["default"].Title, { className: "mb-2" },
                            react_1["default"].createElement("img", { src: images_1.images.envelope, width: 15, height: 15, className: 'mr-2 gray-600 d-inline envelop-icon' }),
                            react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-xs gray-600 d-inline pr-1" },
                                react_1["default"].createElement("u", null,
                                    react_1["default"].createElement("a", { className: "gray-600-hover gray-600", href: "mailto:?subject=" + (SendInviteEventData && SendInviteEventData.title) + "&body=" + (SendInviteEventData && SendInviteEventData.emailBody) }, "Send Invite"))))),
                    react_1["default"].createElement("div", null, MoreInfoLink && (react_1["default"].createElement(MoreInfoLink, null,
                        react_1["default"].createElement("u", { className: 'font-size-sm my-2 font-weight-bold text-uppercase d-block' }, "View More")))))))));
};
//# sourceMappingURL=eventSearchCard.js.map