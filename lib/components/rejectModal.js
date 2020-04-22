"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var uploadButton_1 = require("./uploadButton");
var textarea_1 = require("./textarea");
require("../../scss/_modal.scss");
exports.RejectModal = function (props) {
    var show = props.show, dialogMessage = props.dialogMessage, _a = props.rejectButtonText, rejectButtonText = _a === void 0 ? 'Reject' : _a, _b = props.cancelButtonText, cancelButtonText = _b === void 0 ? 'Cancel' : _b, handleClose = props.handleClose, handleReject = props.handleReject, textAreaMaxLength = props.textAreaMaxLength, rejectMessage = props.rejectMessage, handleChange = props.handleChange;
    return (react_1["default"].createElement(react_bootstrap_1.Modal, { show: show, onHide: handleClose, className: "reject-modal" },
        react_1["default"].createElement(react_bootstrap_1.Modal.Body, { className: "text-condensed font-weight-bold text-left pt-5" },
            react_1["default"].createElement(textarea_1.Textarea, { label: dialogMessage, controlId: '', maxLength: textAreaMaxLength, name: "aboutMe", value: rejectMessage, rows: 3, handleChange: handleChange, textareaClassName: "rounded-0" })),
        react_1["default"].createElement(react_bootstrap_1.Modal.Footer, { className: "border-0 d-flex justify-content-right" },
            react_1["default"].createElement("div", { className: "w-100 mb-5" },
                react_1["default"].createElement(react_bootstrap_1.Col, { xs: "12", className: "text-right" },
                    react_1["default"].createElement(uploadButton_1.UploadButton, { handleClick: handleClose, title: cancelButtonText, uniqueIdentifier: "close", className: "font-size-sm text-upper mr-4" }),
                    react_1["default"].createElement(uploadButton_1.UploadButton, { handleClick: handleReject, title: rejectButtonText, uniqueIdentifier: "reject", className: "font-size-sm text-upper primary-button" }))))));
};
//# sourceMappingURL=rejectModal.js.map