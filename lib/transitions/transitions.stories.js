"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var menuSlide_1 = require("./menuSlide");
// @TODO: Figure out how to display transitions properly in the stories.
exports["default"] = {
    component: menuSlide_1.MenuSlideTransition,
    title: 'Transitions'
};
exports.menuSlideTransition = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(menuSlide_1.MenuSlideTransition, { showToggle: true },
        react_1["default"].createElement("p", null, "Some content in the menu")))); };
//# sourceMappingURL=transitions.stories.js.map