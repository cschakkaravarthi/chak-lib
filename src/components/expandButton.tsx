import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';
import { Button } from 'react-bootstrap';

export const ExpandButton: FC<UIButtonProps> = props => {
  return (
    <Button
      className="expand-button border-0 text-decoration-line h-100 p-0 position-relative shadow-none"
      onClick={props.handleClick}
    >
      <span className="d-sm-inline order-xl-2 text-uppercase letter-spacing-01rem"><u>{props.title}</u></span>
    </Button>
  );
};
