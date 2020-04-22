"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var testHelper_1 = require("../services/testHelper");
var nav_1 = require("./nav");
var navOverlay_1 = require("./navOverlay");
var navBar_1 = require("./navBar");
var images_1 = require("../assets/images");
var breadcrumb_nav_1 = require("./breadcrumb-nav");
describe('Nav', function () {
    it('should render Breadcrumb nav', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(breadcrumb_nav_1.Breadcrumb, { onSelect: function (selectedKey) {
                return console.log("selected " + selectedKey);
            }, items: [
                {
                    key: 1,
                    isActive: true,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Home")); }
                },
                {
                    key: 2,
                    isActive: false,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Corporate Finance")); }
                },
                {
                    key: 3,
                    isActive: false,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Finance Operations")); }
                },
                {
                    key: 4,
                    isActive: false,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Local Finance Sites")); }
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly Primary Nav', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(nav_1.Nav, { items: [
                {
                    key: 1,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "News")); }
                },
                {
                    key: 2,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Employee Services")); }
                },
                {
                    key: 3,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "People & Offices")); }
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly Secondary Nav', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(nav_1.Nav, { variant: "secondary", items: [
                {
                    key: 1,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "JIRA")); }
                },
                {
                    key: 2,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Workday")); }
                },
                {
                    key: 3,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Replicon")); }
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly Secondary Nav Section', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(nav_1.Nav, { variant: 'secondary', sectionTitle: 'Quick Links', sectionLink: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Edit")); }, items: [
                {
                    key: 1,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "JIRA")); }
                },
                {
                    key: 2,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Workday")); }
                },
                {
                    key: 3,
                    Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Replicon")); }
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly nav overlay', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(navOverlay_1.NavOverlay, { show: true, editMode: false, setShow: function () { alert('clicked'); }, handleAdd: function () { alert('clicked'); }, handleEdit: function () { alert('clicked'); }, navGroups: [
                {
                    sectionTitle: 'Company',
                    sectionIcon: images_1.images.sectionIcon1,
                    variant: 'overlay',
                    items: [
                        {
                            key: 1,
                            Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Mission, Vision, and Cultural Values")); }
                        },
                        {
                            key: 2,
                            Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Culture Champion Portal")); }
                        },
                        {
                            key: 3,
                            Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Leadership")); }
                        }
                    ]
                }
            ] }));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly NavBarSection', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(navBar_1.NavBar, { variant: 'top' },
            react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'standard' },
                react_1["default"].createElement("p", null, "Some content in a standard section")),
            react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'light' },
                react_1["default"].createElement("p", null, "Some content in a light section")),
            react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'dark' },
                react_1["default"].createElement("p", null, "Some content in a dark section"))));
        expect(tree).toMatchSnapshot();
    });
    it('should render correctly navbar side', function () {
        var tree = testHelper_1.shallowRender(react_1["default"].createElement(navBar_1.NavBar, { variant: 'side' },
            react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'standard' },
                react_1["default"].createElement("p", null, "Some content in a standard section")),
            react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'light' },
                react_1["default"].createElement("p", null, "Some content in a light section")),
            react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'dark' },
                react_1["default"].createElement("p", null, "Some content in a dark section"))));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=nav.test.js.map