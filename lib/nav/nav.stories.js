"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var StoriesContainer_1 = __importDefault(require("../StoriesContainer"));
var nav_1 = require("./nav");
var navOverlay_1 = require("./navOverlay");
var navBar_1 = require("./navBar");
var breadcrumb_nav_1 = require("./breadcrumb-nav");
var SubMenu_1 = require("./SubMenu");
var images_1 = require("../assets/images");
var editButton_1 = require("../components/editButton");
exports["default"] = {
    component: nav_1.Nav,
    title: 'Navigation'
};
exports.breadcrumbNav = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(breadcrumb_nav_1.Breadcrumb, { onSelect: function (selectedKey) { return console.log("selected " + selectedKey); }, items: [
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
        ] }))); };
exports.SubMenuNav = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(SubMenu_1.SubMenu, { onSelect: function (selectedKey) { return console.log("selected " + selectedKey); }, items: [
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
        ] }))); };
exports.primaryNav = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(nav_1.Nav, { items: [
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
        ] }))); };
exports.secondaryNav = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(nav_1.Nav, { variant: "secondary", items: [
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
        ] }))); };
exports.navSection = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(nav_1.Nav, { variant: 'secondary', sectionTitle: 'Quick Links', sectionLink: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Edit")); }, items: [
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
        ] }))); };
exports.navOverlay = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(navOverlay_1.NavOverlay, { show: true, editMode: true, setShow: function () { alert('clicked'); }, handleAdd: function () { alert('clicked'); }, handleEdit: function () { alert('clicked'); }, navGroups: [
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
            },
            {
                sectionTitle: 'Featured Links',
                sectionIcon: images_1.images.sectionIcon2,
                variant: 'overlay',
                items: [
                    {
                        key: 4,
                        Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "CO-LAB")); }
                    },
                    {
                        key: 5,
                        Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "CO-LAB")); }
                    },
                    {
                        key: 6,
                        Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "CO-LAB")); }
                    },
                    {
                        key: 7,
                        Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "CO-LAB")); }
                    },
                    {
                        key: 8,
                        Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "CO-LAB")); }
                    },
                    {
                        key: 9,
                        Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "CO-LAB")); }
                    },
                    {
                        key: 10,
                        Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Retirement Services")); }
                    },
                    {
                        key: 11,
                        Link: function (p) { return (react_1["default"].createElement("a", { href: "#", className: p.className }, "Brand Central")); }
                    }
                ]
            },
            {
                sectionTitle: 'Company',
                sectionIcon: images_1.images.sectionIcon3,
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
        ] }))); };
exports.navBarTop = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(navBar_1.NavBar, { variant: 'top' },
        react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'standard' },
            react_1["default"].createElement("p", null, "Some content in a standard section")),
        react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'light' },
            react_1["default"].createElement("p", null, "Some content in a light section")),
        react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'dark' },
            react_1["default"].createElement("p", null, "Some content in a dark section"))))); };
exports.navBarSide = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(navBar_1.NavBar, { variant: 'side' },
        react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'standard' },
            react_1["default"].createElement("p", null, "Some content in a standard section")),
        react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'light' },
            react_1["default"].createElement("p", null, "Some content in a light section")),
        react_1["default"].createElement(navBar_1.NavBarSection, { variant: 'dark' },
            react_1["default"].createElement("p", null, "Some content in a dark section"))))); };
exports.otherNav = function () { return (react_1["default"].createElement(StoriesContainer_1["default"], null,
    react_1["default"].createElement(nav_1.Nav, { variant: 'secondary', sectionTitle: 'My Links', className: 'text-uppercase font-size-sm', editLink: function () { return (react_1["default"].createElement(editButton_1.EditButton, { handleClick: function () { alert('clicked'); }, title: 'Edit' })); }, items: [] }))); };
//# sourceMappingURL=nav.stories.js.map