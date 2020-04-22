import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../../scss/_transitions.scss';

export interface MenuSlideTransitionProps {
  showToggle: boolean;
}

export const MenuSlideTransition: FC<MenuSlideTransitionProps> = props => {
  return (
    <CSSTransition
      timeout={300}
      unmountOnExit
      in={props.showToggle}
      classNames='slide-menu'
    >
      {props.children}
    </CSSTransition>
  );
};
