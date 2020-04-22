"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var archiveAppreciation_1 = require("./archiveAppreciation");
exports["default"] = {
    component: archiveAppreciation_1.ArchiveAppreciation,
    title: 'Archive Appreciation'
};
exports.archiveAppreciation = function () {
    return (react_1["default"].createElement(StoriesContainer_1["default"], null,
        react_1["default"].createElement(archiveAppreciation_1.ArchiveAppreciation, { date: "SEP 30, 2019", leftTitle: "Sender Name", MainLink: function (p) { return react_1["default"].createElement("a", { href: "#" }, p.children); } })));
};
//# sourceMappingURL=archiveAppreciation.stories.js.map