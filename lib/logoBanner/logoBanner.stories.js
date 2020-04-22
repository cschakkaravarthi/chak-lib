"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var logoBanner_1 = require("./logoBanner");
var images_1 = require("../assets/images");
exports["default"] = {
    component: logoBanner_1.LogoBanner,
    title: 'Logo Banner'
};
exports.logoBanner = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(logoBanner_1.LogoBanner, { bannerSrc: images_1.images.bannerSrc, logoSrc: images_1.images.logoSrc }))); };
//# sourceMappingURL=logoBanner.stories.js.map