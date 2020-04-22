"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var uploadButton_1 = require("./uploadButton");
require("../../scss/_modal.scss");
exports.AlertModal = function (props) {
    var show = props.show, dialogMessage = props.dialogMessage, _a = props.alertButtonText, alertButtonText = _a === void 0 ? 'Ok' : _a, handleClose = props.handleClose;
    return (react_1["default"].createElement(react_bootstrap_1.Modal, { show: show, onHide: handleClose, className: "alert-modal" },
        react_1["default"].createElement(react_bootstrap_1.Modal.Body, { className: "text-condensed font-weight-bold text-center pt-5" }, dialogMessage),
        react_1["default"].createElement(react_bootstrap_1.Modal.Footer, { className: "border-0 d-flex justify-content-center" },
            react_1["default"].createElement(react_bootstrap_1.Row, { className: "w-100 mb-5" },
                react_1["default"].createElement(react_bootstrap_1.Col, { lg: "12", md: "12", className: "text-center" },
                    react_1["default"].createElement(uploadButton_1.UploadButton, { handleClick: handleClose, title: alertButtonText, uniqueIdentifier: "close", className: "font-size-sm text-upper primary-button" }))))));
};
//# sourceMappingURL=alertModal.js.map