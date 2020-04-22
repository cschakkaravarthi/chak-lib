import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';

export const UploadButton: FC<UIButtonProps> = props => {
  return (
    <button
      id={props.uniqueIdentifier}
      className={`upload-button font-weight-bold text-uppercase letter-spacing-01rem ${props.className}`}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};
