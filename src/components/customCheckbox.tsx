import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';

import '../../scss/_checkbox.scss';

export const CustomCheckbox: FC<UIButtonProps> = props => {
  return (
    <div className={`left-label-checkbox ${props.className}`} onClick={props.handleClick}>
      <label className={props.checked ? 'checked' : ''}>{props.title}</label>
      <input
        name={props.name}
        type="checkbox"
        id={props.uniqueIdentifier}
        checked={props.checked}
      />
    </div>
  );
};
