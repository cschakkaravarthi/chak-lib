"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var images_1 = require("../assets/images");
exports.TodoInput = function (props) {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    var handleSave = props.handleSave;
    var handleTextChange = function (e) {
        var value = e.target.value;
        setText(value);
    };
    var handleClick = function () {
        handleSave(text);
        setText('');
    };
    return (react_1["default"].createElement(react_bootstrap_1.Row, { className: 'py-2' },
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 10, sm: 10, md: 11, lg: 11, xl: 11, className: 'pl-0' },
            react_1["default"].createElement("input", { type: 'text', value: text, placeholder: 'New To Do list item...', className: 'w-100 font-size-xs pl-3 text-dark', onChange: handleTextChange })),
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 2, sm: 2, md: 1, lg: 1, xl: 1, className: 'pl-2 d-flex' },
            react_1["default"].createElement("button", { className: 'font-size-xs gray-600 float-right pt-1 d-flex align-items-center', onClick: handleClick },
                react_1["default"].createElement(react_bootstrap_1.Image, { src: images_1.images.addIcon, width: 15, height: 15, className: "cursor-pointer" }),
                react_1["default"].createElement("span", { className: 'd-none d-sm-inline d-md-inline d-lg-inline d-xl-inline pl-2 font-size-xs gray-600' }, "Add")))));
};
exports.BookmarkInput = function (props) {
    var _a = react_1.useState(''), url = _a[0], setUrl = _a[1];
    var _b = react_1.useState(''), title = _b[0], setTitle = _b[1];
    var handleSave = props.handleSave;
    var handleUrlChange = function (e) {
        var value = e.target.value;
        setUrl(value);
    };
    var handleTitleChange = function (e) {
        var value = e.target.value;
        setTitle(value);
    };
    var handleClick = function () {
        handleSave(url, title);
        setUrl('');
        setTitle('');
    };
    return (react_1["default"].createElement(react_bootstrap_1.Row, { className: 'py-2' },
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 10, sm: 10, md: 6, lg: 6, className: 'pl-0' },
            react_1["default"].createElement("input", { type: 'text', value: url, placeholder: 'New Bookmark URL...', className: 'w-100 font-size-xs px-3 text-dark', onChange: handleUrlChange })),
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 10, sm: 10, md: 5, lg: 5, className: 'pl-0' },
            react_1["default"].createElement("input", { type: 'text', value: title, placeholder: 'New Bookmark Title...', className: 'w-100 font-size-xs px-3 text-dark', onChange: handleTitleChange })),
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 2, sm: 2, md: 1, lg: 1, className: 'pl-2 d-flex' },
            react_1["default"].createElement("button", { className: 'font-size-xs gray-600 float-right pt-1 d-flex align-items-center', onClick: handleClick },
                react_1["default"].createElement(react_bootstrap_1.Image, { src: images_1.images.addIcon, width: 15, height: 15, className: "cursor-pointer" }),
                react_1["default"].createElement("span", { className: 'd-none d-sm-inline d-md-inline d-lg-inline d-xl-inline pl-2 font-size-xs gray-600' }, "Add")))));
};
exports.BookmarkItem = function (props) {
    var handleClick = function () {
        props.handleDelete(props.identifier);
    };
    return (react_1["default"].createElement(react_bootstrap_1.Row, { className: 'py-2' },
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, className: 'border bookmark-input-container py-2' },
            react_1["default"].createElement("a", { className: 'font-size-xs text-underlined text-dark', href: props.url, target: '_blank' }, props.title),
            react_1["default"].createElement("button", { className: 'd-inline float-right cursor-pointer', onClick: handleClick },
                react_1["default"].createElement(react_bootstrap_1.Image, { src: images_1.images.remove, width: 15, height: 15, className: "cursor-pointer" }),
                react_1["default"].createElement("span", { className: 'd-none d-sm-none d-md-inline d-lg-inline d-xl-inline pl-2 font-size-xs gray-600' }, "Remove")))));
};
exports.TodoItem = function (props) {
    var handleClick = function () {
        props.handleDelete(props.identifier);
    };
    return (react_1["default"].createElement(react_bootstrap_1.Row, { className: 'py-2' },
        react_1["default"].createElement(react_bootstrap_1.Col, { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, className: 'border todo-input-container py-2' },
            react_1["default"].createElement("span", { className: 'font-size-xs text-dark' }, props.text),
            react_1["default"].createElement("button", { className: 'd-inline float-right cursor-pointer', onClick: handleClick },
                react_1["default"].createElement(react_bootstrap_1.Image, { src: images_1.images.remove, width: 15, height: 15, className: "cursor-pointer" }),
                react_1["default"].createElement("span", { className: 'd-none d-sm-none d-md-inline d-lg-inline d-xl-inline pl-2 font-size-xs gray-600' }, "Remove")))));
};
//# sourceMappingURL=myToolKit.js.map