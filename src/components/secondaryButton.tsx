import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';
import { Button } from 'react-bootstrap';

export const SecondaryButton: FC<UIButtonProps> = props => {
  return (
    <Button
      variant="outline-secondary"
      className="btn-secondary font-weight-bold text-uppercase letter-spacing-01rem"
      onClick={props.handleClick}
    >
      <span className="d-sm-inline order-xl-2">{props.title}</span>
    </Button>
  );
};
