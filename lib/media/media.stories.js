"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var media_1 = require("./media");
exports["default"] = {
    component: media_1.Media,
    title: 'Media'
};
exports.mediaPrimary = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(media_1.Media, { variant: 'primary', title: 'Media title primary', sectionImageSrc: "https://picsum.photos/id/522/200/200", bodyText: 'Some text to see how the primary body text looks' }))); };
exports.mediaSecondary = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(media_1.Media, { title: 'Section', variant: 'secondary', subsection: 'Subsection', sectionImageSrc: "https://picsum.photos/id/522/200/200" }))); };
//# sourceMappingURL=media.stories.js.map