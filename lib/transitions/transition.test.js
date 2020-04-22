"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var menuSlide_1 = require("./menuSlide");
describe('MenuSlideTransition', function () {
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(menuSlide_1.MenuSlideTransition, { showToggle: true },
            react_1["default"].createElement("p", null, "Some content in the menu")));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=transition.test.js.map