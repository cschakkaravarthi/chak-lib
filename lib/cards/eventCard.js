"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var cardImage_1 = require("./cardImage");
var images_1 = require("../assets/images");
exports.EventCard = function (props) {
    var imageUrl = props.imageUrl, title = props.title, date = props.date, categories = props.categories, location = props.location, _a = props.MainLink, MainLink = _a === void 0 ? null : _a, _b = props.MoreInfoLink, MoreInfoLink = _b === void 0 ? null : _b, AddToCalenderLink = props.AddToCalenderLink, SendInviteEventData = props.SendInviteEventData;
    return (react_1["default"].createElement(Card_1["default"], { className: "card-event-standard rounded-0 h-100 border-0" },
        imageUrl && MainLink && (react_1["default"].createElement(MainLink, null,
            react_1["default"].createElement(cardImage_1.CardImage, { imageUrl: imageUrl }))),
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement(Card_1["default"].Title, { className: "my-2 font-weight-bold font-size-base text-condensed card-title h5" }, MainLink && react_1["default"].createElement(MainLink, null, title)),
            react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm text-uppercase mb-1 font-weight-bold text-condensed" },
                react_1["default"].createElement("span", { className: "mr-3" }, date),
                categories &&
                    categories.map(function (c) { return (react_1["default"].createElement("span", { className: "font-size-sm gray-600 mb-1 d-inline", key: c.drupal_id }, c.title)); })),
            react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm mt-2" }, location),
            react_1["default"].createElement("div", { className: "row ml-1" },
                react_1["default"].createElement("button", { onClick: AddToCalenderLink },
                    react_1["default"].createElement("img", { src: images_1.images.calendar, width: 15, height: 15, className: 'mr-2 gray-600 d-inline' }),
                    react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-xs gray-600 d-inline pr-1" },
                        react_1["default"].createElement("u", null, "Add to Calendar")))),
            react_1["default"].createElement("div", { className: "d-flex flex-column align-items-start align-items-sm-front w-100 ml-1 pl-sm-0 pr-sm-2" },
                react_1["default"].createElement(Card_1["default"].Title, { className: "mb-2" },
                    react_1["default"].createElement("img", { src: images_1.images.envelope, width: 15, height: 15, className: 'mr-2 gray-600 d-inline envelop-icon' }),
                    react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-xs gray-600 d-inline pr-1" },
                        react_1["default"].createElement("u", null,
                            react_1["default"].createElement("a", { className: "gray-600-hover gray-600", href: "mailto:?subject=" + (SendInviteEventData && SendInviteEventData.title) + "&body=" + (SendInviteEventData && SendInviteEventData.emailBody) }, "Send Invite"))))),
            MoreInfoLink && (react_1["default"].createElement(MoreInfoLink, null,
                react_1["default"].createElement("u", { className: "font-size-sm my-2 font-weight-bold text-uppercase d-block letter-spacing" }, "More Info"))))));
};
//# sourceMappingURL=eventCard.js.map