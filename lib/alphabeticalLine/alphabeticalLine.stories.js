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
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var alphabeticalLine_1 = require("./alphabeticalLine");
var Container_1 = __importDefault(require("react-bootstrap/Container"));
exports.alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
exports["default"] = {
    component: alphabeticalLine_1.AlphabeticalLine,
    title: 'Alphabetical Line'
};
exports.alphabeticalLine = function () {
    var _a = react_1.useState(''), isActive = _a[0], setIsActive = _a[1];
    var handleActiveItem = function (letter) {
        setIsActive(letter);
    };
    return (react_1["default"].createElement(StoriesContainer_1["default"], null,
        react_1["default"].createElement("p", null, "This component takes 3 props: letter, onClick and isActive. You can play with them to set the active class to the proper element or just to grab the value of the clicked element and fire any other event onClick."),
        react_1["default"].createElement("hr", null),
        react_1["default"].createElement(Container_1["default"], { className: "py-3 alphabetical-line d-flex flex-wrap justify-content-between" }, exports.alphabet.map(function (item) { return (react_1["default"].createElement(alphabeticalLine_1.AlphabeticalLine, { letter: item.toUpperCase(), key: item, onClick: function () { return handleActiveItem(item); }, isActive: item === isActive })); }))));
};
//# sourceMappingURL=alphabeticalLine.stories.js.map