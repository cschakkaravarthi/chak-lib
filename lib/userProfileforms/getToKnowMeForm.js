"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var textbox_1 = require("../components/textbox");
var textarea_1 = require("../components/textarea");
var primaryButton_1 = require("../components/primaryButton");
var cancelButton_1 = require("../components/cancelButton");
var contentWrapper_1 = require("../components/contentWrapper");
var customCheckbox_1 = require("../components/customCheckbox");
require("../../scss/_forms.scss");
exports.GetToKnowMeForm = function (props) {
    var title = props.title, nickname = props.nickname, languagesSpoken = props.languagesSpoken, professionalSkills = props.professionalSkills, currentlyWorking = props.currentlyWorking, aboutMe = props.aboutMe, hideBirthdayOnProfile = props.hideBirthdayOnProfile, hideAnniversaryOnProfile = props.hideAnniversaryOnProfile, handleSave = props.handleSave, handleCancel = props.handleCancel, handleChange = props.handleChange, birthDay = props.birthDay, birthMonth = props.birthMonth, anniversaryDay = props.anniversaryDay, anniversaryMonth = props.anniversaryMonth, handleHideBirthday = props.handleHideBirthday, handleHideAnniversary = props.handleHideAnniversary, textBoxMaxLength = props.textBoxMaxLength, textArearBoxMaxLength = props.textArearBoxMaxLength;
    var dates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var deafultOption = react_1["default"].createElement("option", { value: "", key: "", selected: true }, "N/A");
    return (react_1["default"].createElement(contentWrapper_1.ContentWrapper, { title: title, titleClass: "text-upper d-lg-inline flex-row font-size-md mb-0", subtitle: "All information is visible to anyone on UMG Central.", subtitleClass: "gray-600 font-size-sm d-lg-inline ml-lg-4 form-user-desc-subtitle", topBorder: 'darkTurquoise', wrapperClass: 'h-100' },
        react_1["default"].createElement(react_bootstrap_1.Form, { className: "font-size-sm w-100 form-user-description mt-4" },
            react_1["default"].createElement(react_bootstrap_1.Form.Row, { className: "d-flex justify-content-between" },
                react_1["default"].createElement(react_bootstrap_1.Col, null,
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "formNickname", className: "pr-md-2" },
                        react_1["default"].createElement(textbox_1.Textbox, { controlId: "nickname", name: "nickname", maxLength: textBoxMaxLength, className: "font-weight-bold text-condensed font-size-base", label: "Nickname", type: "text", value: nickname, allowCheckbox: false, handleChange: handleChange })))),
            react_1["default"].createElement(react_bootstrap_1.Form.Row, null,
                react_1["default"].createElement(react_bootstrap_1.Col, { lg: 3, md: 7 },
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "formBirthMonth" },
                        react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: "font-weight-bold text-condensed font-size-base" }, "Birthday"),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { name: "birthMonth", as: "select", value: birthMonth, onChange: handleChange },
                            deafultOption,
                            months.map(function (month) {
                                return react_1["default"].createElement("option", { value: month, key: month }, month);
                            })))),
                react_1["default"].createElement(react_bootstrap_1.Col, { lg: 3, md: 7, className: "paddingRight" },
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "formBirthday", className: "day-dropdown" },
                        react_1["default"].createElement(customCheckbox_1.CustomCheckbox, { handleClick: handleHideBirthday, checked: hideBirthdayOnProfile, title: "Hide on profile:", className: "mb-1" }),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { name: "birthday", as: "select", value: birthDay, onChange: handleChange },
                            deafultOption,
                            dates.map(function (date) {
                                return react_1["default"].createElement("option", { value: date, key: date }, date);
                            })))),
                react_1["default"].createElement(react_bootstrap_1.Col, { lg: 3, md: 7 },
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "formAnniversayMonth" },
                        react_1["default"].createElement(react_bootstrap_1.Form.Label, { className: "font-weight-bold text-condensed font-size-base" }, "Work Anniversary"),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { name: "anniversaryMonth", as: "select", value: anniversaryMonth, onChange: handleChange },
                            deafultOption,
                            months.map(function (month) {
                                return react_1["default"].createElement("option", { value: month, key: month }, month);
                            })))),
                react_1["default"].createElement(react_bootstrap_1.Col, { lg: 3, md: 5 },
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "formAnniversayday", className: "day-dropdown" },
                        react_1["default"].createElement(customCheckbox_1.CustomCheckbox, { handleClick: handleHideAnniversary, checked: hideAnniversaryOnProfile, title: "Hide on profile:", className: "mb-1" }),
                        react_1["default"].createElement(react_bootstrap_1.Form.Control, { name: "anniversaryDay", as: "select", value: anniversaryDay, onChange: handleChange },
                            deafultOption,
                            dates.map(function (date) {
                                return react_1["default"].createElement("option", { value: date, key: date }, date);
                            }))))),
            react_1["default"].createElement(react_bootstrap_1.Form.Row, null,
                react_1["default"].createElement(react_bootstrap_1.Col, null,
                    react_1["default"].createElement(react_bootstrap_1.Form.Group, { controlId: "formLanguagesSpoken", className: "pr-md-2" },
                        react_1["default"].createElement(textbox_1.Textbox, { controlId: "formLanguagesSpoken", className: "font-weight-bold text-condensed font-size-base", name: 'languagesSpoken', maxLength: textBoxMaxLength, label: "Languages Spoken", type: "text", value: languagesSpoken, allowCheckbox: false, handleChange: handleChange })))),
            react_1["default"].createElement(textarea_1.Textarea, { controlId: "formSkills", className: "font-weight-bold text-condensed font-size-base", maxLength: textArearBoxMaxLength, name: "professionalSkills", label: "Professional Skills", value: professionalSkills, rows: 3, handleChange: handleChange }),
            react_1["default"].createElement(textarea_1.Textarea, { controlId: "formCurrentlyWorking", className: "font-weight-bold text-condensed font-size-base", maxLength: textArearBoxMaxLength, name: "currentlyWorking", label: "What I'm currently working on", value: currentlyWorking, rows: 3, handleChange: handleChange }),
            react_1["default"].createElement(textarea_1.Textarea, { controlId: "formAboutme", className: "font-weight-bold text-condensed font-size-base", maxLength: textArearBoxMaxLength, name: "aboutMe", label: "Something about me", value: aboutMe, rows: 3, handleChange: handleChange }),
            react_1["default"].createElement(react_bootstrap_1.Form.Row, { className: 'mt-2 mb-2' },
                react_1["default"].createElement(react_bootstrap_1.Col, { md: 12, className: 'd-flex justify-content-end mt-2' },
                    react_1["default"].createElement(cancelButton_1.CancelButton, { title: "Cancel", className: 'cancel-button text-underlined text-upper border border-0 mr-3', uniqueIdentifier: "ok", handleClick: handleCancel }),
                    react_1["default"].createElement(primaryButton_1.PrimaryButton, { title: "Save", className: 'text-upper', uniqueIdentifier: "ok", handleClick: handleSave }))))));
};
//# sourceMappingURL=getToKnowMeForm.js.map