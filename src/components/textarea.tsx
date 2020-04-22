import React, { FC } from 'react';
import { Form } from 'react-bootstrap';

export interface UITextareaProps {
  label: string;
  name?: string;
  rows?: number;
  value?: string;
  subLabel?: string;
  controlId: string;
  className?: string;
  maxLength?: number;
  subLabelClass?: string;
  textareaClassName?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Textarea: FC<UITextareaProps> = props => {
  const {
    name,
    rows,
    label,
    value,
    subLabel,
    controlId,
    className,
    maxLength,
    handleChange,
    subLabelClass,
    textareaClassName
  } = props;
  return (
    <Form.Group controlId={controlId}>
      <Form.Label className={className}>
        {label}{' '}
        {subLabel && (
          <span className={`font-size-sm g600-text-clr ${subLabelClass}`}>{subLabel}</span>
        )}
      </Form.Label>
      <Form.Control
        rows={rows}
        name={name}
        as="textarea"
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        className={`${textareaClassName} rounded-0`}
      />
    </Form.Group>
  );
};
