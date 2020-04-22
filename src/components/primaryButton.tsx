import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';
import { Button } from 'react-bootstrap';

export const PrimaryButton: FC<UIButtonProps> = props => {
  return (
    <Button
      className={`btn-primary font-size-sm letter-spacing-01rem font-weight-bold text-uppercase ${props.className}`}
      onClick={props.handleClick}
    >
      {props.title}
    </Button>
  );
};
