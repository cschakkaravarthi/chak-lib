"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var media_1 = require("./media");
var mediaPrimary_1 = require("./mediaPrimary");
var mediaSecondary_1 = require("./mediaSecondary");
describe('Media', function () {
    it('should render primary variant correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(media_1.Media, { variant: 'primary', title: 'Media title primary', sectionImageSrc: "https://picsum.photos/id/522/200/200", bodyText: 'Some text to see how the primary body text looks' }));
        expect(tree).toMatchSnapshot();
    });
    it('should render secondary variant correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(media_1.Media, { title: 'Section', variant: 'secondary', subsection: 'Subsection', sectionImageSrc: "https://picsum.photos/id/522/200/200" }));
        expect(tree).toMatchSnapshot();
    });
    it('should render primary correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(mediaPrimary_1.MediaPrimary, { title: 'Media title primary', sectionImageSrc: "https://picsum.photos/id/522/200/200", bodyText: 'Some text to see how the primary body text looks' }));
        expect(tree).toMatchSnapshot();
    });
    it('should render secondary correctly', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(mediaSecondary_1.MediaSecondary, { title: 'Section', subsection: 'Subsection', sectionImageSrc: "https://picsum.photos/id/522/200/200" }));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=media.test.js.map