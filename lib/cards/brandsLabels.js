"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var encode_1 = require("../common/encode");
exports.BrandsLabelsCard = function (props) {
    return (react_1["default"].createElement(Card_1["default"], { className: 'card-notification-standard rounded-0' },
        react_1["default"].createElement("a", { className: 'card-brand-image d-flex align-items-center', href: props.url ? encode_1.encode(props.url) : '#', target: '_blank' },
            props.imageUrl && (react_1["default"].createElement("img", { src: encode_1.encode(props.imageUrl), className: 'w-100', title: props.title, alt: props.title })),
            !props.imageUrl && (react_1["default"].createElement("h2", { className: 'text-center w-100' }, props.title)))));
};
//# sourceMappingURL=brandsLabels.js.map