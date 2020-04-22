"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var autoSuggest_1 = require("./autoSuggest");
describe('SearchBarAutoSuggest', function () {
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(autoSuggest_1.AutoSuggest, { handleSubmit: function () { alert('clicked'); }, suggestions: [], getSuggestions: function () { alert('clicked'); }, handleSelected: function () { alert('clicked'); }, manualSearch: function () { alert('clicked'); }, miniNoOfCharsShowSuggestions: 2, onSuggestionsClearRequested: function () { alert('clicked'); }, suggestionValue: "" }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly mobile search bar', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(autoSuggest_1.AutoSuggest, { handleSubmit: function () { alert('clicked'); }, suggestions: [], getSuggestions: function () { alert('clicked'); }, handleSelected: function () { alert('clicked'); }, manualSearch: function () { alert('clicked'); }, miniNoOfCharsShowSuggestions: 2, onSuggestionsClearRequested: function () { alert('clicked'); }, suggestionValue: "", isMobileSearchBar: true }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=autoSuggest.test.js.map