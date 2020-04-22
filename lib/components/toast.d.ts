import { FC } from 'react';
import '../../scss/_toast.scss';
export declare type ToastVariantType = 'success' | 'error';
export interface ToastProps {
    message: string;
    variant: ToastVariantType;
    className?: string;
}
export declare const Toast: FC<ToastProps>;
//# sourceMappingURL=toast.d.ts.map