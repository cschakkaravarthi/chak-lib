"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
require("../../scss/_forms.scss");
var images_1 = require("../assets/images");
exports.SearchBar = function (props) {
    return (react_1["default"].createElement(react_bootstrap_1.Form, { onSubmit: props.handleSubmit, className: 'search-form' },
        react_1["default"].createElement(react_bootstrap_1.InputGroup, null,
            react_1["default"].createElement(react_bootstrap_1.InputGroup.Prepend, null,
                react_1["default"].createElement(react_bootstrap_1.Button, { variant: "outline-secondary", type: "submit" },
                    react_1["default"].createElement("img", { src: images_1.images.searchIconWhite, width: 15, height: 15 }))),
            react_1["default"].createElement(react_bootstrap_1.Form.Control, { placeholder: "Search", "aria-label": "Search", value: props.searchTerm, onChange: props.handleChange }))));
};
//# sourceMappingURL=searchbar.js.map