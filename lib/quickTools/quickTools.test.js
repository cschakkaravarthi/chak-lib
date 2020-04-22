"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var quickToolsCard_1 = require("./quickToolsCard");
describe('QuickTools', function () {
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(quickToolsCard_1.BasicQuickToolsCard, { title: "Something's Broken!", Links: [
                {
                    linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                    linkTitle: 'Create an i.t. ticket'
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(quickToolsCard_1.BasicQuickToolsCard, { title: "Self-Service Password Reset", Links: [
                {
                    linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                    linkTitle: 'Reset Password'
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(quickToolsCard_1.BasicQuickToolsCard, { title: "Time off request", Links: [
                {
                    linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                    linkTitle: 'Request time off'
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(quickToolsCard_1.BasicQuickToolsCard, { title: "Important Contacts", Links: [
                {
                    linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                    linkTitle: 'Security'
                },
                {
                    linkAction: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); },
                    linkTitle: 'Facilities'
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=quickTools.test.js.map