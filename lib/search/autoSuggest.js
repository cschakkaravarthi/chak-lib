"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var images_1 = require("../assets/images");
require("../../scss/_forms.scss");
var react_autosuggest_1 = __importDefault(require("react-autosuggest"));
var SearchAutoSuggest = react_autosuggest_1["default"];
exports.AutoSuggest = function (props) {
    var _a = react_1.useState(''), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(false), showClearButton = _b[0], setClearButton = _b[1];
    var getSuggestionValue = function (suggestion) {
        var regex = /(<([^>]+)>)/ig;
        suggestion.value = suggestion.value.replace(regex, '');
        return suggestion.value;
    };
    var renderSuggestion = function (suggestion) {
        return (react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: suggestion.label } }));
    };
    var triggerManualSearch = function (value) {
        return props.manualSearch(value);
    };
    var onChanges = function (event, newValue) {
        triggerManualSearch(newValue.newValue);
        newValue.newValue.length > 0 ? setClearButton(true) : setClearButton(false); // --enable for clear button
        return setValue(newValue.newValue);
    };
    react_1.useEffect(function () {
        if (props.suggestionValue) {
            setValue(props.suggestionValue);
            setClearButton(true);
        }
        else {
            setValue('');
            setClearButton(false);
        }
    }, [props.suggestionValue]);
    var onSuggestionsSelected = function (event, suggested) {
        return props.handleSelected(suggested.suggestion);
    };
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    var onSuggestionsFetchRequested = function (changeReason) {
        props.getSuggestions(changeReason.value);
    };
    var inputProps = {
        placeholder: props.placeHolder,
        value: value,
        onChange: onChanges
    };
    var shouldRenderSuggestions = function (value) {
        return value.trim().length > props.miniNoOfCharsShowSuggestions;
    };
    var onSuggestionsClearRequested = function () {
        props.onSuggestionsClearRequested && props.onSuggestionsClearRequested();
    };
    var resetInputField = function () {
        setValue('');
        setClearButton(false);
    };
    var _c = props.isMobileSearchBar, isMobileSearchBar = _c === void 0 ? false : _c;
    return (react_1["default"].createElement(react_bootstrap_1.Form, { onSubmit: props.handleSubmit, className: (isMobileSearchBar ? 'mobile-search-bar' : 'auto-suggest-form') + " align-items-center d-flex", onReset: resetInputField },
        react_1["default"].createElement(react_bootstrap_1.InputGroup, null,
            !isMobileSearchBar && react_1["default"].createElement(react_bootstrap_1.InputGroup.Prepend, null,
                react_1["default"].createElement(react_bootstrap_1.Button, { className: "pl-0 border-0", variant: "outline-secondary", type: "submit" },
                    react_1["default"].createElement("img", { src: images_1.images.searchIconWhite, className: "search-icon" }))),
            react_1["default"].createElement(SearchAutoSuggest, { suggestions: props.suggestions, onSuggestionsFetchRequested: onSuggestionsFetchRequested, onSuggestionSelected: onSuggestionsSelected, getSuggestionValue: getSuggestionValue, shouldRenderSuggestions: shouldRenderSuggestions, renderSuggestion: renderSuggestion, inputProps: inputProps, onSuggestionsClearRequested: onSuggestionsClearRequested }),
            react_1["default"].createElement("div", { className: (isMobileSearchBar ? '' : 'd-none') + " d-lg-inline" }, showClearButton && (react_1["default"].createElement(react_bootstrap_1.InputGroup.Append, null,
                react_1["default"].createElement(react_bootstrap_1.Button, { className: "p-1 border-0", variant: "outline-light", type: "reset" },
                    react_1["default"].createElement(react_bootstrap_1.Image, { src: images_1.images.remove, width: 20, height: 20, className: "cursor-pointer" }))))),
            isMobileSearchBar && react_1["default"].createElement(react_bootstrap_1.InputGroup.Append, null,
                react_1["default"].createElement(react_bootstrap_1.Button, { className: "p-1 border-0", variant: "outline-light", type: "submit" },
                    react_1["default"].createElement("img", { src: images_1.images.searchIconGrey, className: "search-icon" }))))));
};
//# sourceMappingURL=autoSuggest.js.map