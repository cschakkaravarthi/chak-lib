import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';
import { Button } from 'react-bootstrap';
import { images } from '../assets/images';

export const CloseButton: FC<UIButtonProps> = props => {
  return (
    <Button
      variant="dark"
      className="dark-background p-3 menu-toggler"
      onClick={props.handleClick}
    >
      <img src={images.close} width={50} height={50} />
    </Button>
  );
};
