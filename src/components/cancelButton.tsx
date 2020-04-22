import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';
// import { Button } from 'react-bootstrap';

export const CancelButton: FC<UIButtonProps> = props => {
  return (
    <button
      className={`cancel-button ${props.className}`}
      key={props.uniqueIdentifier}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};
