"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var encode_1 = require("../common/encode");
exports.CardMap = function (props) {
    var title = props.title, children = props.children, titleClass = props.titleClass, topBorder = props.topBorder, address = props.address, addressOnMap = props.addressOnMap;
    if (!address)
        return null;
    var handleMapUrl = "https://maps.google.com/maps?q=" + encode_1.encode(addressOnMap) + "&t=&z=9&ie=UTF8&iwloc=&output=embed";
    return (react_1["default"].createElement(Card_1["default"], { className: "cards-list-container rounded-0 cards-list-top-border-" + topBorder + " border-0" },
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement("div", { className: "d-flex flex-column justify-content-between align-items-baseline mb-3" },
                react_1["default"].createElement(Card_1["default"].Title, { className: titleClass + " font-size-base font-weight-bold mb-0" }, title),
                react_1["default"].createElement(Card_1["default"].Text, { className: "my-3" }, address),
                react_1["default"].createElement("div", { className: "mapouter position-relative text-right w-100" },
                    react_1["default"].createElement("div", { className: "gmap_canvas w-100" },
                        react_1["default"].createElement("iframe", { scrolling: "no", frameBorder: "0", marginWidth: 0, marginHeight: 0, src: handleMapUrl })))),
            children)));
};
//# sourceMappingURL=cardMap.js.map