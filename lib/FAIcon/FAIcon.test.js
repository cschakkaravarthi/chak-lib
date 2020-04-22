"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var FAIcon_1 = __importDefault(require("./FAIcon"));
describe('FAIcon', function () {
    it('should FAIcon render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(FAIcon_1["default"], { color: 'red', iconSize: 'sm', className: '', iconName: 'calendar' }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=FAIcon.test.js.map