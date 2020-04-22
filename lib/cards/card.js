"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var articleCard_1 = require("./articleCard");
var articleCardFeatured_1 = require("./articleCardFeatured");
var eventCardEmbedded_1 = require("./eventCardEmbedded");
var eventCard_1 = require("./eventCard");
var eventCardList_1 = require("./eventCardList");
var articleCardFull_1 = require("./articleCardFull");
var eventCardFull_1 = require("./eventCardFull");
var departmentCard_1 = require("./departmentCard");
var employeeServCard_1 = require("./employeeServCard");
var notificationCard_1 = require("./notificationCard");
var articleSearchCard_1 = require("./articleSearchCard");
var eventSearchCard_1 = require("./eventSearchCard");
var peopleSearchCard_1 = require("./peopleSearchCard");
var individualPersonCard_1 = require("./individualPersonCard");
var minimalCard_1 = require("./minimalCard");
var peopleCard_1 = require("./peopleCard");
var contactMeCard_1 = require("./contactMeCard");
var getToKnowMeCard_1 = require("./getToKnowMeCard");
var cardMap_1 = require("./cardMap");
var newsMinimalList_1 = require("./newsMinimalList");
var newsListEmbbedded_1 = require("./newsListEmbbedded");
var searchNoResultCard_1 = require("./searchNoResultCard");
var cardsListContainer_1 = require("./cardsListContainer");
var officesListContainer_1 = require("./officesListContainer");
var knowledgeBaseSearchCard_1 = require("./knowledgeBaseSearchCard");
var techCatalogSearchCard_1 = require("./techCatalogSearchCard");
var linkSearchCard_1 = require("./linkSearchCard");
var documentSearchCard_1 = require("./documentSearchCard");
var departmentSearchCard_1 = require("./departmentSearchCard");
var officeSearchCard_1 = require("./officeSearchCard");
var pageSearchCard_1 = require("./pageSearchCard");
var myContacts_1 = require("./myContacts");
var appreciationCardNotification_1 = require("./appreciationCardNotification");
var brandsLabels_1 = require("./brandsLabels");
var createAppreciationCard_1 = require("./createAppreciationCard");
var appreciationCard_1 = require("./appreciationCard");
var appreciationCardThumbnail_1 = require("./appreciationCardThumbnail");
require("../../scss/_card.scss");
exports.Card = function (props) {
    var _a = props.type, type = _a === void 0 ? 'article' : _a, _b = props.variant, variant = _b === void 0 ? 'standard' : _b;
    switch (type) {
        case 'appreciation':
            switch (variant) {
                case 'default':
                    return react_1["default"].createElement(appreciationCard_1.AppreciationCard, __assign({}, props));
                case 'notification':
                    return react_1["default"].createElement(appreciationCardNotification_1.AppreciationCardNotification, __assign({}, props));
                case 'create':
                    return react_1["default"].createElement(createAppreciationCard_1.CreateAppreciationCard, __assign({}, props));
                case 'thumbnail':
                    return react_1["default"].createElement(appreciationCardThumbnail_1.AppreciationCardThumbnail, __assign({}, props));
            }
            break;
        case 'map':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(cardMap_1.CardMap, __assign({}, props));
            }
            break;
        case 'article':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(articleCard_1.ArticleCard, __assign({}, props));
                case 'featured':
                    return react_1["default"].createElement(articleCardFeatured_1.ArticleCardFeatured, __assign({}, props));
                case 'full':
                    return react_1["default"].createElement(articleCardFull_1.ArticleCardFull, __assign({}, props));
                case 'search':
                    return react_1["default"].createElement(articleSearchCard_1.ArticleSearchCard, __assign({}, props));
                case 'newsList':
                    return react_1["default"].createElement(newsMinimalList_1.MinimalNewsList, __assign({}, props));
                case 'newsListEmbedded':
                    return react_1["default"].createElement(newsListEmbbedded_1.NewsListEmbedded, __assign({}, props));
            }
            break;
        case 'event':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(eventCard_1.EventCard, __assign({}, props));
                case 'embedded':
                    return react_1["default"].createElement(eventCardEmbedded_1.EventCardEmbedded, __assign({}, props));
                case 'list':
                    return react_1["default"].createElement(eventCardList_1.ListCard, __assign({}, props));
                case 'full':
                    return react_1["default"].createElement(eventCardFull_1.EventCardFull, __assign({}, props));
                case 'search':
                    return react_1["default"].createElement(eventSearchCard_1.EventSearchCard, __assign({}, props));
            }
            break;
        case 'department':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(departmentCard_1.DepartmentCard, __assign({}, props));
                case 'search':
                    return react_1["default"].createElement(departmentSearchCard_1.DepartmentSearchCard, __assign({}, props));
            }
            break;
        case 'employeeServ':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(employeeServCard_1.EmployeeServCard, __assign({}, props));
            }
            break;
        case 'notification':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(notificationCard_1.NotificationCard, __assign({}, props));
            }
            break;
        case 'cardsInContainer':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(cardsListContainer_1.CardsListContainer, __assign({}, props));
            }
            break;
        case 'people':
            switch (variant) {
                case 'search':
                    return react_1["default"].createElement(peopleSearchCard_1.PeopleSearchCard, __assign({}, props));
                case 'profile':
                    return react_1["default"].createElement(peopleCard_1.PeopleCard, __assign({}, props));
                case 'individual':
                    return react_1["default"].createElement(individualPersonCard_1.IndividualPersonCard, __assign({}, props));
            }
            break;
        case 'search':
            switch (variant) {
                case 'noResult':
                    return react_1["default"].createElement(searchNoResultCard_1.SearchNoResultCard, __assign({}, props));
            }
            break;
        case 'link':
            switch (variant) {
                case 'minimal':
                    return react_1["default"].createElement(minimalCard_1.MinimalCard, __assign({}, props));
                case 'search':
                    return react_1["default"].createElement(linkSearchCard_1.LinkSearchCard, __assign({}, props));
            }
            break;
        case 'contactMe':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(contactMeCard_1.ContactMeCard, __assign({}, props));
                case 'profile':
                    return react_1["default"].createElement(myContacts_1.MyContacts, __assign({}, props));
            }
            break;
        case 'getToKnowMe':
            switch (variant) {
                case 'standard':
                    return react_1["default"].createElement(getToKnowMeCard_1.GetToKnowMeCard, __assign({}, props));
            }
            break;
        case 'page':
            switch (variant) {
                case 'search':
                    return react_1["default"].createElement(pageSearchCard_1.PageSearchCard, __assign({}, props));
            }
            break;
        case 'officesListContainer':
            switch (variant) {
                case 'light':
                    return react_1["default"].createElement(officesListContainer_1.OfficesListContainer, __assign({}, props));
            }
            break;
        case 'knowledgeBase':
            switch (variant) {
                case 'search':
                    return react_1["default"].createElement(knowledgeBaseSearchCard_1.KnowledgeBaseSearchCard, __assign({}, props));
            }
            break;
        case 'techCatalog':
            switch (variant) {
                case 'search':
                    return react_1["default"].createElement(techCatalogSearchCard_1.TechCatalogSearchCard, __assign({}, props));
            }
            break;
        case 'document':
            switch (variant) {
                case 'search':
                    return react_1["default"].createElement(documentSearchCard_1.DocumentSearchCard, __assign({}, props));
            }
            break;
        case 'office':
            switch (variant) {
                case 'search':
                    return react_1["default"].createElement(officeSearchCard_1.OfficeSearchCard, __assign({}, props));
            }
            break;
        case 'brands':
            switch (variant) {
                case 'default':
                    return react_1["default"].createElement(brandsLabels_1.BrandsLabelsCard, __assign({}, props));
            }
    }
    return null;
};
//# sourceMappingURL=card.js.map