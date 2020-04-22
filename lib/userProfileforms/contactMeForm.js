"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var textbox_1 = require("../components/textbox");
var contentWrapper_1 = require("../components/contentWrapper");
var primaryButton_1 = require("../components/primaryButton");
var cancelButton_1 = require("../components/cancelButton");
exports.ContactMeForm = function (props) {
    var title = props.title, hideMobileNumberOnProfile = props.hideMobileNumberOnProfile, mobileNumber = props.mobileNumber, handleCheckboxWithIdentifier = props.handleCheckboxWithIdentifier, handleSave = props.handleSave, handleCancel = props.handleCancel, handleChange = props.handleChange, mobileNumberMaxLength = props.mobileNumberMaxLength;
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: title, subtitle: "All information is visible to anyone on UMG Central.", subtitleClass: "gray-600 font-size-sm d-lg-inline ml-lg-4 form-user-desc-subtitle", titleClass: "font-size-md font-weight-bold text-uppercase d-lg-inline flex-row mb-0", topBorder: 'darkTurquoise', wrapperClass: 'h-100' },
        react_1["default"].createElement(react_bootstrap_1.Form, { className: 'form-user-description mt-4' },
            react_1["default"].createElement(react_bootstrap_1.Form.Row, null,
                react_1["default"].createElement(react_bootstrap_1.Col, null,
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "formMobile", className: "pr-md-2" },
                        react_1["default"].createElement(textbox_1.Textbox, { controlId: "formMobile", className: "font-weight-bold text-condensed", maxLength: mobileNumberMaxLength, name: "mobileNumber", label: "Mobile", placeholder: "+1 999 999 9999", type: "tel", value: mobileNumber, handleChange: handleChange, allowCheckbox: true, checkboxValue: hideMobileNumberOnProfile, handleCheckbox: function (e) { return handleCheckboxWithIdentifier && handleCheckboxWithIdentifier(e, 'hideMobileNumberOnProfile'); } })))),
            react_1["default"].createElement(react_bootstrap_1.Form.Row, { className: 'mt-2 mb-2' },
                react_1["default"].createElement(react_bootstrap_1.Col, { md: 12, className: 'd-flex justify-content-end mt-2' },
                    react_1["default"].createElement(cancelButton_1.CancelButton, { title: "Cancel", className: 'cancel-button text-underlined text-upper border border-0 mr-3', uniqueIdentifier: "ok", handleClick: handleCancel }),
                    react_1["default"].createElement(primaryButton_1.PrimaryButton, { title: "Save", className: 'text-upper', uniqueIdentifier: "ok", handleClick: handleSave }))))));
};
//# sourceMappingURL=contactMeForm.js.map