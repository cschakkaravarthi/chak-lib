import React from 'react';

export interface Category {
  // TODO: for now we only have described name and key as inner values
  drupal_id: number;
  title: string;
}

export interface HamburgerButtonProps {
  handleClick: (e: React.SyntheticEvent) => void;
  open?: boolean;
  uniqueIdentifier?: string;
  title?: string;
  checked?: boolean;
  className?: string;
}

export interface UIButtonProps {
  handleClick?: (e: React.SyntheticEvent) => void;
  uniqueIdentifier?: string;
  title?: string;
  checked?: boolean;
  className?: string;
  imageSrc?: string;
  name?: string;
  hrefLink?: string;
}

// Common for user profile view and edit mode
export interface PeopleCardProps {
  isFetching?: boolean;
  title: string;
  imageUrl?: string;
  loader?: string;
  location?: string;
  companyName?: string;
  department?: string;
  center?: string;
  desk?: string;
  handleChangePhoto?: (e: React.SyntheticEvent) => void;
  isCurrentUser?: boolean;
  isUploading?: boolean;
  handleDeletePhoto?: (e: React.SyntheticEvent) => void;
  hasProfilePhoto?: boolean;
}

export interface ContactMeCardProps {
  isFetching?: boolean;
  title: string;
  office?: string;
  mobile?: string;
  email?: string;
  handleClick?: (e: React.SyntheticEvent) => void;
  isCurrentUser?: boolean;
  contactPic?: string;
  handleAddToContacts?: (e: React.SyntheticEvent) => void;
  addToContactImage?: string;
  LinkToProfile?: React.ComponentType;
  editButtonLink?: string;
}

export interface GetToKnowMeCardProps {
  title: string;
  aboutMe?: string;
  nickname?: string;
  birthDay?: string;
  birthMonth?: string;
  isFetching?: boolean;
  anniversaryDay?: string;
  isCurrentUser?: boolean;
  editButtonLink?: string;
  languagesSpoken?: string;
  anniversaryMonth?: string;
  currentlyWorking?: string;
  professionalSkills?: string;
  handleClick?: (e: React.SyntheticEvent) => void;
}

export interface ContactMeEditCardProps {
  title: string;
  mobileNumber?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: (e: React.SyntheticEvent) => void;
  handleCancel: (e: React.SyntheticEvent) => void;
  mobileNumberMaxLength?: number;
}

export interface ThumbButtonProps {
  handleClick?: (e: React.SyntheticEvent) => void;
  numberOfLikes?: number;
  liked?: boolean;
  icon?: string;
}

export interface ResourceProps {
  title: string;
  extension: string;
  link: string;
}

export interface BookmarkInputProps {
  handleSave: (url: string, title: string) => void;
}

export interface TodoInputProps {
  handleSave: (text: string) => void;
}

export interface BookmarkItemProps {
  handleDelete: (identifier: string) => void;
  identifier: string;
  url: string;
  title: string;
}

export interface TodoItemProps {
  handleDelete: (identifier: string) => void;
  identifier: string;
  text: string;
}
