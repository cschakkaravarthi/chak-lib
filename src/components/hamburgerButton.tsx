import React, { FC } from 'react';
import { HamburgerButtonProps } from '../interfaces';

export const HamburgerButton: FC<HamburgerButtonProps> = props => {
  return (
    <div
      className={`mr-3 ml-3 position-relative ${props.open ? 'hamburger nav_open ' : 'hamburger'} ${props.className || ''}`}
      onClick={props.handleClick}
    >
      <span className="position-absolute"></span>
      <span className="position-absolute"></span>
      <span className="position-absolute"></span>
      <span className="position-absolute"></span>
    </div>
  );
};
