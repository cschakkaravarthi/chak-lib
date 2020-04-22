"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var logoBanner_1 = require("./logoBanner");
var images_1 = require("../assets/images");
describe('LogoBanner', function () {
    it('should render correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(logoBanner_1.LogoBanner, { bannerSrc: images_1.images.bannerSrc, logoSrc: images_1.images.logoSrc }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=logoBanner.test.js.map