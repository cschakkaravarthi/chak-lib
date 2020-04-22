import React, { FC } from 'react';

import '../../scss/_nav.scss';

// @TODO: Need a better way to accept classnames, etc.
export interface NavBarProps {
  variant?: string;
  className?: string;
}

export const NavBarSection: FC<NavBarProps> = props => {
  return (
    <div
      className={`navbar-section navbar-section-${props.variant} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export const NavBar: FC<NavBarProps> = props => {
  const isTop = props.variant === 'top';
  return (
    <>
      {isTop && <div className="nav-placeholder-top" />}
      <div className={isTop ? 'navbar-top' : 'navbar-side'}>
        {props.children}
      </div>
    </>
  );
};
