import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { CustomCheckbox } from './customCheckbox';

export interface UITextboxProps {
  label: string;
  type: string;
  className?: string;
  value?: string;
  checkboxValue?: boolean;
  controlId: string;
  name?: string;
  allowCheckbox: boolean;
  placeholder?: string;
  maxLength?: number;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckbox?: (e: React.SyntheticEvent) => void;
}

export const Textbox: FC<UITextboxProps> = props => {
  const {
    label,
    type,
    className,
    name,
    value,
    controlId,
    handleChange,
    allowCheckbox,
    checkboxValue,
    handleCheckbox,
    placeholder,
    maxLength
  } = props;
  return (
    <Form.Group controlId={controlId}>
      {allowCheckbox && handleCheckbox && (
        <div className="d-flex justify-content-between">
          <Form.Label className={className}>{label}</Form.Label>
          <CustomCheckbox
            name={name}
            handleClick={handleCheckbox}
            checked={checkboxValue}
            title="Hide on profile:"
          />
        </div>
      )}
      {!allowCheckbox && (
        <Form.Label className={`${className} font-weight-bold`}>
          {label}
        </Form.Label>
      )}
      <Form.Control
        type={type}
        name={name}
        value={value}
        className="rounded-0"
        maxLength={maxLength}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};
