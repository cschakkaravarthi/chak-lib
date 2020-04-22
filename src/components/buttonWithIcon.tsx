import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';
import { Image } from 'react-bootstrap';

export interface ButtonWithIconProps extends UIButtonProps {
  imageSrc?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  labelClassName?: string;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = props => {
  const {
    className,
    uniqueIdentifier,
    handleClick,
    title,
    imageSrc,
    imageWidth = 20,
    imageHeight = 20,
    labelClassName = 'gray-600',
    hrefLink
  } = props;
  return (
    <a
      className={`font-size-sm cursor-pointer ${className}`}
      key={uniqueIdentifier}
      onClick={handleClick}
      href={hrefLink}
    >
      {imageSrc && <Image src={imageSrc} width={imageWidth} height={imageHeight} />}
      <span className={`pl-2 ${labelClassName}`}>{title}</span>
    </a>
  );
};
