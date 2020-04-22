"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var Card_1 = __importDefault(require("react-bootstrap/Card"));
require("../../scss/_orgchart.scss");
exports.OrgChart = function (props) {
    var _a = props.Users, user = _a.user, manager = _a.manager, subordinates = _a.subordinates, handleClick = props.handleClick;
    return (react_1["default"].createElement(Card_1["default"], { className: 'cards-list-container fix-height p-3 border-0 rounded-0 h-100' },
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement("div", { className: 'd-flex justify-content-between align-items-baseline mb-3' },
                react_1["default"].createElement(Card_1["default"].Title, { className: 'text-upper mb-4 font-size-md' }, "ORG CHART")),
            react_1["default"].createElement("div", { className: "org-chart font-size-sm overflow-auto" },
                react_1["default"].createElement("ul", null, manager
                    ? react_1["default"].createElement("li", { className: 'list-unstyled position-relative' },
                        react_1["default"].createElement("div", { className: "cursor-pointer", onClick: function () { return handleClick(manager.email); } },
                            react_1["default"].createElement(react_bootstrap_1.Container, { className: 'org-chart-child-card text-left m-0 pl-3' },
                                react_1["default"].createElement(react_bootstrap_1.Row, { className: 'pl-2 font-weight-bold pr-2' }, manager.name),
                                react_1["default"].createElement(react_bootstrap_1.Row, { className: 'pl-2 text-condensed' }, manager.title))),
                        react_1["default"].createElement("ul", null,
                            react_1["default"].createElement("li", { className: 'list-unstyled position-relative' },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(react_bootstrap_1.Container, { className: 'org-chart-parent-card m-0  pt-2 pl-3 pb-2' },
                                        react_1["default"].createElement(react_bootstrap_1.Row, { className: 'pl-2 font-weight-bold pr-2 text-left org-chart-parent-card-font' }, user.name))),
                                react_1["default"].createElement("ol", null, subordinates && subordinates.map(function (m) { return (react_1["default"].createElement("li", { className: 'list-unstyled position-relative', key: m.email },
                                    react_1["default"].createElement("div", { className: "cursor-pointer", onClick: function () { return handleClick(m.email); } },
                                        react_1["default"].createElement(react_bootstrap_1.Container, { className: 'org-chart-child-card  text-left m-0 pl-3' },
                                            react_1["default"].createElement(react_bootstrap_1.Row, { className: 'pl-2 font-weight-bold pr-2' }, m.name),
                                            react_1["default"].createElement(react_bootstrap_1.Row, { className: 'pl-2 text-condensed' }, m.title))))); })))))
                    : react_1["default"].createElement("li", { className: 'list-unstyled position-relative' },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(react_bootstrap_1.Container, { className: 'org-chart-parent-card m-0  pt-2 pl-3 pb-2' },
                                react_1["default"].createElement(react_bootstrap_1.Row, { className: 'pl-2 font-weight-bold pr-2 text-left org-chart-parent-card-font' }, user.name))),
                        react_1["default"].createElement("ol", null, subordinates && subordinates.map(function (m) { return (react_1["default"].createElement("li", { className: 'list-unstyled position-relative', key: m.email },
                            react_1["default"].createElement("div", { className: "cursor-pointer", onClick: function () { return handleClick(m.email); } },
                                react_1["default"].createElement(react_bootstrap_1.Container, { className: 'org-chart-child-card  text-left m-0 pl-3' },
                                    react_1["default"].createElement(react_bootstrap_1.Row, { className: 'pl-2 font-weight-bold pr-2' }, m.name),
                                    react_1["default"].createElement(react_bootstrap_1.Row, { className: 'pl-2 text-condensed' }, m.title))))); }))))))));
};
//# sourceMappingURL=orgChart.js.map