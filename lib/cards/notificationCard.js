"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var images_1 = require("../assets/images");
exports.NotificationCard = function (props) {
    var isNew = props.isNew, title = props.title, dateTime = props.dateTime, onArchive = props.onArchive, drupal_id = props.drupal_id, body_full = props.body_full, isArchive = props.isArchive, categories = props.categories, body_summary = props.body_summary, notificationType = props.notificationType, isApprove = props.isApprove, serviceNowLink = props.serviceNowLink, onApprove = props.onApprove, onReject = props.onReject;
    var _a = react_1.useState(false), showMore = _a[0], setShowMore = _a[1];
    var summaryMaxLength = 250;
    var bodyFull = typeof body_full === 'string'
        ? body_full
        : body_full && body_full.props.dangerouslySetInnerHTML.__html;
    var handleShowMore = function () { return setShowMore(!showMore); };
    return (react_1["default"].createElement(Container_1["default"], { className: "card-notification-standard notification-type-" + notificationType + " rounded-0 card border-0 my-3" },
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement(Card_1["default"].Title, { className: "d-flex justify-content-between font-size-base font-weight-bolder" },
                title,
                isNew ? (react_1["default"].createElement("span", { className: "text-secondary ml-5 font-size-base font-weight-bolder" }, "NEW")) : null),
            react_1["default"].createElement(Card_1["default"].Text, { className: "d-flex" },
                react_1["default"].createElement("strong", { className: "mr-3 font-size-sm font-weight-bolder text-uppercase" }, dateTime),
                "\u00A0",
                categories &&
                    categories.map(function (c) { return (react_1["default"].createElement("strong", { key: c.drupal_id, className: "text-secondary font-weight-bolder font-size-sm pr-2" }, c.title)); })),
            react_1["default"].createElement(Card_1["default"].Text, { className: "font-size-sm font-weight-lighter " + (showMore
                    ? ''
                    : 'card-manual-notification-standard-cut-summary') }, showMore ? body_full : body_summary),
            !isApprove && bodyFull && bodyFull.length > summaryMaxLength ? (react_1["default"].createElement("button", { type: "button", onClick: handleShowMore, className: "card-notification-standard-more font-size-sm mr-5 font-weight-bolder border-0" },
                showMore ? 'SHOW LESS' : 'SHOW MORE',
                react_1["default"].createElement("span", { className: "show-more-arrow pl-2" }, showMore ? (react_1["default"].createElement("img", { src: images_1.images.chevronUp, width: 10, height: 10 })) : (react_1["default"].createElement("img", { src: images_1.images.chevronDown, width: 10, height: 10 }))))) : react_1["default"].createElement("a", { href: serviceNowLink, target: "_blank", className: "font-size-sm mr-5 font-weight-bolder" }, "SHOW MORE"),
            isArchive || isApprove ? null : (react_1["default"].createElement("button", { type: "button", onClick: function () { return onArchive && onArchive(drupal_id); }, className: "card-notification-standard-archive text-secondary font-weight-bolder border-0 font-size-sm" },
                react_1["default"].createElement("u", { className: "letter-spacing" }, "ARCHIVE"))),
            isApprove ? (react_1["default"].createElement("span", null,
                react_1["default"].createElement("button", { type: "button", onClick: function () { return onApprove && onApprove(drupal_id); }, className: "card-notification-standard-archive mr-3  font-weight-bolder border-0 font-size-sm approve-color" },
                    react_1["default"].createElement("u", { className: "letter-spacing" }, "APPROVE")),
                react_1["default"].createElement("button", { type: "button", onClick: function () { return onReject && onReject(drupal_id); }, className: "card-notification-standard-archive   font-weight-bolder border-0 font-size-sm reject-color" },
                    react_1["default"].createElement("u", { className: "letter-spacing" }, "REJECT")))) : null)));
};
//# sourceMappingURL=notificationCard.js.map