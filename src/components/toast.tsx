import React, { FC } from 'react';
import '../../scss/_toast.scss';

export type ToastVariantType = 'success' | 'error';

export interface ToastProps {
  message: string;
  variant: ToastVariantType;
  className?: string;
}

export const Toast: FC<ToastProps> = props => {
  const {
    message,
    variant,
    className
  } = props;
  return (
    <div className={`toast toast-${variant} ${className}`}>{message}</div>
  );
};
