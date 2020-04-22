import React, { FC } from 'react';
export interface UITextareaProps {
    className?: string;
    controlId: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    maxLength?: number;
    name?: string;
    rows?: number;
    value?: string;
    textareaClassName?: string;
}
export declare const Textarea: FC<UITextareaProps>;
//# sourceMappingURL=textarea.d.ts.map