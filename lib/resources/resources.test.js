"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var resources_1 = require("./resources");
describe('Resources', function () {
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(resources_1.Resources, { mainLinkText: "Link Text", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=resources.test.js.map