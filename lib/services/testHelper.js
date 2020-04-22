"use strict";
/* eslint @typescript-eslint/no-explicit-any: "off" */
// In this one file we do actually want to use the "any" type. This is a very generic function.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var shallow_1 = __importDefault(require("react-test-renderer/shallow"));
exports.shallowRender = function (toRender) {
    var renderer = shallow_1["default"].createRenderer();
    renderer.render(toRender);
    return renderer.getRenderOutput();
};
//# sourceMappingURL=testHelper.js.map