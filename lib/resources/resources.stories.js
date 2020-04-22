"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var resources_1 = require("./resources");
exports["default"] = {
    component: resources_1.Resources,
    title: 'Resources'
};
exports.resources = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(resources_1.Resources, { mainLinkText: "ReallySuperExtraLongNameForTheResource with spaces even bigger", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); }, extension: 'PPT', external: true }))); };
//# sourceMappingURL=resources.stories.js.map