"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var uploadButton_1 = require("./uploadButton");
require("../../scss/_modal.scss");
exports.ConfirmationModal = function (props) {
    var show = props.show, dialogMessage = props.dialogMessage, _a = props.okayButtonText, okayButtonText = _a === void 0 ? 'Okay' : _a, _b = props.cancelButtonText, cancelButtonText = _b === void 0 ? 'Cancel' : _b, handleClose = props.handleClose, handleSave = props.handleSave;
    return (react_1["default"].createElement(react_bootstrap_1.Modal, { show: show, onHide: handleClose, className: "confirmation-modal" },
        react_1["default"].createElement(react_bootstrap_1.Modal.Body, { className: "text-condensed font-weight-bold text-center pt-5" }, dialogMessage),
        react_1["default"].createElement(react_bootstrap_1.Modal.Footer, { className: "border-0 d-flex justify-content-center" },
            react_1["default"].createElement(react_bootstrap_1.Row, { className: "w-100 mb-5" },
                react_1["default"].createElement(react_bootstrap_1.Col, { xs: "6", className: "text-center" },
                    react_1["default"].createElement(uploadButton_1.UploadButton, { handleClick: handleClose, title: cancelButtonText, uniqueIdentifier: "close", className: "font-size-sm text-upper" })),
                react_1["default"].createElement(react_bootstrap_1.Col, { xs: "6", className: "text-center" },
                    react_1["default"].createElement(uploadButton_1.UploadButton, { handleClick: handleSave, title: okayButtonText, uniqueIdentifier: "save", className: "font-size-sm text-upper" }))))));
};
//# sourceMappingURL=confirmationModal.js.map