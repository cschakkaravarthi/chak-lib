import React, { FC } from 'react';
import { UIButtonProps } from '../interfaces';
import { Form } from 'react-bootstrap';

import '../../scss/_checkbox.scss';

export const Checkbox: FC<UIButtonProps> = props => {
  return (
    <Form onClick={props.handleClick}>
      <Form.Check
        custom
        type="checkbox"
        id={props.uniqueIdentifier}
        label={props.title}
        checked={props.checked}
      />
    </Form>
  );
};
