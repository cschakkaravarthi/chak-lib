import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';
import Image from 'react-bootstrap/Image';
import { images } from '../assets/images';

export const EditButton: FC<UIButtonProps> = props => {
  return (
    <a
      href={props.hrefLink}
      className={`edit-button cursor-pointer ${props.className || ''}`}
      onClick={props.handleClick}
    >
      <Image width={15} height={15} src={props.imageSrc || images.editIcon} className="pr-1 d-inline" />
      <span className="d-sm-inline order-xl-2 font-size-xs text-uppercase letter-spacing-01rem">
        {props.title || 'Edit'}
      </span>
    </a>
  );
};
