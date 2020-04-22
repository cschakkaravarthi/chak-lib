import React, { FC } from 'react';
import { ArticleCard, ArticleCardProps } from './articleCard';
import {
  ArticleCardFeatured,
  ArticleCardFeaturedProps
} from './articleCardFeatured';
import { EventCardEmbedded } from './eventCardEmbedded';
import { EventCard, EventCardProps } from './eventCard';
import { ListCard, ListCardProps } from './eventCardList';
import { ArticleCardFullProps, ArticleCardFull } from './articleCardFull';
import { EventCardFullProps, EventCardFull } from './eventCardFull';
import { DepartmentCardProps, DepartmentCard } from './departmentCard';
import { EmployeeServCardProps, EmployeeServCard } from './employeeServCard';
import { NotificationCard, NotificationCardProps } from './notificationCard';
import { ArticleSearchCard, ArticleSearchCardProps } from './articleSearchCard';
import { EventSearchCard, EventSearchCardProps } from './eventSearchCard';
import { PeopleSearchCard, PeopleSearchCardProps } from './peopleSearchCard';
import {
  IndividualPersonCard,
  IndividualPersonCardProps
} from './individualPersonCard';
import { MinimalCard, MinimalCardProps } from './minimalCard';
import { PeopleCard } from './peopleCard';
import { ContactMeCard } from './contactMeCard';
import { GetToKnowMeCard } from './getToKnowMeCard';
import { CardMap, CardMapProps } from './cardMap';
import { MinimalNewsListProps, MinimalNewsList } from './newsMinimalList';
import { NewsListEmbedded, NewsListEmbeddedProps } from './newsListEmbbedded';
import { ContentWrapperProps } from '..';
import {
  SearchNoResultCard,
  SearchNoResultCardProps
} from './searchNoResultCard';
import {
  CardsListContainer,
  CardsListContainerProps
} from './cardsListContainer';
import {
  PeopleCardProps,
  ContactMeCardProps,
  GetToKnowMeCardProps
} from '../interfaces';
import {
  OfficesListContainer,
  OfficesCardContainerProps
} from './officesListContainer';
import {
  KnowledgeBaseSearchCard,
  KnowledgeBaseSearchCardProps
} from './knowledgeBaseSearchCard';
import {
  TechCatalogSearchCard,
  TechCatalogSearchCardProps
} from './techCatalogSearchCard';
import { LinkSearchCard, LinkSearchCardProps } from './linkSearchCard';
import {
  DocumentSearchCard,
  DocumentSearchCardProps
} from './documentSearchCard';
import {
  DepartmentSearchCard,
  DepartmentSearchCardProps
} from './departmentSearchCard';
import { OfficeSearchCard, OfficeSearchCardProps } from './officeSearchCard';
import { PageSearchCard, PageSearchCardProps } from './pageSearchCard';
import { MyContacts } from './myContacts';
import {
  AppreciationCardNotification,
  AppreciationCardNotificationProps
} from './appreciationCardNotification';
import {
  BrandsLabelsCardProps,
  BrandsLabelsCard
} from './brandsLabels';

import {
  CreateAppreciationCard,
  CreateAppreciationCardProps
} from './createAppreciationCard';

import { AppreciationCard, AppreciationCardProps } from './appreciationCard';
import { AppreciationCardThumbnail, AppreciationCardThumbnailProps } from './appreciationCardThumbnail';
import { SystemAndApplicationCard, SystemAndApplicationCardProps } from './systemAndApplicationCard';

import '../../scss/_card.scss';

export interface CardProps
  extends ArticleCardProps,
  AppreciationCardProps,
  CreateAppreciationCardProps,
  AppreciationCardNotificationProps,
  AppreciationCardThumbnailProps,
  ArticleCardFeaturedProps,
  ArticleCardFullProps,
  IndividualPersonCardProps,
  EventCardProps,
  ListCardProps,
  MinimalCardProps,
  CardMapProps,
  CardsListContainerProps,
  NotificationCardProps,
  EventCardFullProps,
  EmployeeServCardProps,
  DepartmentCardProps,
  ArticleSearchCardProps,
  EventSearchCardProps,
  PeopleSearchCardProps,
  PeopleCardProps,
  ContactMeCardProps,
  GetToKnowMeCardProps,
  NewsListEmbeddedProps,
  ContentWrapperProps,
  MinimalNewsListProps,
  OfficesCardContainerProps,
  SearchNoResultCardProps,
  KnowledgeBaseSearchCardProps,
  TechCatalogSearchCardProps,
  LinkSearchCardProps,
  DocumentSearchCardProps,
  DepartmentSearchCardProps,
  OfficeSearchCardProps,
  PageSearchCardProps,
  BrandsLabelsCardProps,
  SystemAndApplicationCardProps {
  type?: string;
  variant?: string;
}

export const Card: FC<CardProps> = props => {
  const { type = 'article', variant = 'standard' } = props;

  switch (type) {
    case 'appreciation':
      switch (variant) {
        case 'default':
          return <AppreciationCard {...props} />;
        case 'notification':
          return <AppreciationCardNotification {...props} />;
        case 'create':
          return <CreateAppreciationCard {...props} />;
        case 'thumbnail':
          return <AppreciationCardThumbnail {...props} />;
      }
      break;
    case 'map':
      switch (variant) {
        case 'standard':
          return <CardMap {...props} />;
      }
      break;
    case 'article':
      switch (variant) {
        case 'standard':
          return <ArticleCard {...props} />;
        case 'featured':
          return <ArticleCardFeatured {...props} />;
        case 'full':
          return <ArticleCardFull {...props} />;
        case 'search':
          return <ArticleSearchCard {...props} />;
        case 'newsList':
          return <MinimalNewsList {...props} />;
        case 'newsListEmbedded':
          return <NewsListEmbedded {...props} />;
      }
      break;
    case 'event':
      switch (variant) {
        case 'standard':
          return <EventCard {...props} />;
        case 'embedded':
          return <EventCardEmbedded {...props} />;
        case 'list':
          return <ListCard {...props} />;
        case 'full':
          return <EventCardFull {...props} />;
        case 'search':
          return <EventSearchCard {...props} />;
      }
      break;
    case 'department':
      switch (variant) {
        case 'standard':
          return <DepartmentCard {...props} />;
        case 'search':
          return <DepartmentSearchCard {...props} />;
      }
      break;
    case 'employeeServ':
      switch (variant) {
        case 'standard':
          return <EmployeeServCard {...props} />;
      }
      break;
    case 'notification':
      switch (variant) {
        case 'standard':
          return <NotificationCard {...props} />;
      }
      break;
    case 'cardsInContainer':
      switch (variant) {
        case 'standard':
          return <CardsListContainer {...props} />;
      }
      break;
    case 'people':
      switch (variant) {
        case 'search':
          return <PeopleSearchCard {...props} />;
        case 'profile':
          return <PeopleCard {...props} />;
        case 'individual':
          return <IndividualPersonCard {...props} />;
      }
      break;
    case 'search':
      switch (variant) {
        case 'noResult':
          return <SearchNoResultCard {...props} />;
      }
      break;
    case 'link':
      switch (variant) {
        case 'minimal':
          return <MinimalCard {...props} />;
        case 'search':
          return <LinkSearchCard {...props} />;
      }
      break;
    case 'contactMe':
      switch (variant) {
        case 'standard':
          return <ContactMeCard {...props} />;
        case 'profile':
          return <MyContacts {...props} />;
      }
      break;
    case 'getToKnowMe':
      switch (variant) {
        case 'standard':
          return <GetToKnowMeCard {...props} />;
      }
      break;
    case 'page':
      switch (variant) {
        case 'search':
          return <PageSearchCard {...props} />;
      }
      break;
    case 'officesListContainer':
      switch (variant) {
        case 'light':
          return <OfficesListContainer {...props} />;
      }
      break;
    case 'knowledgeBase':
      switch (variant) {
        case 'search':
          return <KnowledgeBaseSearchCard {...props} />;
      }
      break;
    case 'techCatalog':
      switch (variant) {
        case 'search':
          return <TechCatalogSearchCard {...props} />;
      }
      break;
    case 'document':
      switch (variant) {
        case 'search':
          return <DocumentSearchCard {...props} />;
      }
      break;
    case 'office':
      switch (variant) {
        case 'search':
          return <OfficeSearchCard {...props} />;
      }
      break;
    case 'brands':
      switch (variant) {
        case 'default':
          return <BrandsLabelsCard {...props} />;
      }
      break;
    case 'systemAndApplication':
      switch (variant) {
        case 'standard':
          return <SystemAndApplicationCard {...props} />;
      }
  }

  return null;
};
