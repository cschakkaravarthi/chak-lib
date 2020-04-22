"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var images_1 = require("../assets/images");
var react_loading_skeleton_1 = __importDefault(require("react-loading-skeleton"));
exports.EventCardEmbedded = function (props) {
    var title = props.title, date = props.date, categories = props.categories, location = props.location, _a = props.MainLink, MainLink = _a === void 0 ? null : _a, AddToCalenderLink = props.AddToCalenderLink, SendInviteEventData = props.SendInviteEventData, _b = props.isFetching, isFetching = _b === void 0 ? false : _b;
    return (react_1["default"].createElement(Card_1["default"], { className: "card-event-embedded border-0 pb-4 mb-4 px-0" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col-12" },
                react_1["default"].createElement(Card_1["default"].Title, { className: "font-weight-bold mb-2" }, !isFetching ? MainLink && react_1["default"].createElement(MainLink, null, title) : react_1["default"].createElement(react_loading_skeleton_1["default"], null)))),
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col-12 col-sm-8" },
                react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm font-weight-bold text-uppercase mb-1 mr-3 d-inline text-condensed" }, !isFetching ? date : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 50 })),
                !isFetching ? categories &&
                    categories.map(function (c) { return (react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm font-weight-bold gray-600 mb-1 d-inline", key: c.drupal_id }, c.title.toUpperCase())); }) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 50 }),
                react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm mt-1" }, !isFetching ? location : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 }))),
            react_1["default"].createElement("div", { className: "col-12 col-sm-4" },
                react_1["default"].createElement("div", { className: "row" },
                    react_1["default"].createElement("div", { className: "d-flex flex-column align-items-start align-items-sm-front w-100 pl-3 pl-sm-0 pr-sm-2" }, !isFetching ? (react_1["default"].createElement("button", { onClick: AddToCalenderLink },
                        react_1["default"].createElement("img", { src: images_1.images.calendar, width: 15, height: 15, className: 'mr-2 gray-600 d-inline' }),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-xs gray-600 d-inline pr-1" },
                            react_1["default"].createElement("u", null, "Add to Calendar")))) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 })),
                    react_1["default"].createElement("div", { className: "d-flex flex-column align-items-start align-items-sm-front w-100 pl-3 pl-sm-0 pr-sm-2" }, !isFetching ? (react_1["default"].createElement(Card_1["default"].Title, { className: "mb-2" },
                        react_1["default"].createElement("img", { src: images_1.images.envelope, width: 15, height: 15, className: 'mr-2 gray-600 d-inline envelop-icon' }),
                        react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-xs gray-600 d-inline pr-1" },
                            react_1["default"].createElement("u", null,
                                react_1["default"].createElement("a", { className: "gray-600-hover gray-600", href: "mailto:?subject=" + (SendInviteEventData && SendInviteEventData.title) + "&body=" + (SendInviteEventData && SendInviteEventData.emailBody) }, "Send Invite"))))) : react_1["default"].createElement(react_loading_skeleton_1["default"], { width: 100 })))))));
};
//# sourceMappingURL=eventCardEmbedded.js.map