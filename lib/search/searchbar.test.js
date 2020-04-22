"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var searchbar_1 = require("./searchbar");
describe('SearchBar', function () {
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(searchbar_1.SearchBar, { handleSubmit: function () { alert('clicked'); }, handleChange: function () { alert('clicked'); }, searchTerm: '' }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=searchbar.test.js.map