"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var cardImage_1 = require("./cardImage");
var images_1 = require("../assets/images");
exports.EventCardFull = function (props) {
    var imageUrl = props.imageUrl, title = props.title, subtitle = props.subtitle, date = props.date, categories = props.categories, location = props.location, content = props.content, AddToCalenderLink = props.AddToCalenderLink, SendInviteEventData = props.SendInviteEventData;
    return (react_1["default"].createElement(Card_1["default"], { className: 'card-event-full rounded-0 border-0' },
        imageUrl && react_1["default"].createElement(cardImage_1.CardImage, { imageUrl: imageUrl }),
        react_1["default"].createElement(Card_1["default"].Body, { className: 'px-3 py-4 p-md-5' },
            react_1["default"].createElement(Card_1["default"].Title, { className: 'font-size-xl mt-2 font-weight-bold' }, title),
            react_1["default"].createElement(Card_1["default"].Text, { className: 'font-size-sm font-weight-bold text-uppercase d-inline text-condensed' }, date),
            categories &&
                categories.map(function (c) { return (react_1["default"].createElement(Card_1["default"].Text, { className: 'font-size-sm gray-600 px-2 d-inline-block float-right', key: c.drupal_id }, c.title)); }),
            react_1["default"].createElement(Card_1["default"].Text, { className: 'font-size-sm text-uppercase my-2' }, location),
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
            react_1["default"].createElement(Card_1["default"].Subtitle, { className: 'font-size-base mt-3 mb-2' }, subtitle),
            content)));
};
//# sourceMappingURL=eventCardFull.js.map