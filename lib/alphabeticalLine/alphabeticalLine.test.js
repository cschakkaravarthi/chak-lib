"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var alphabeticalLine_1 = require("./alphabeticalLine");
describe('Resources', function () {
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(alphabeticalLine_1.AlphabeticalLine, { letter: "A", onClick: function (e) { return console.log(e.target.value); } }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=alphabeticalLine.test.js.map