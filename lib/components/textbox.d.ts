import React, { FC } from 'react';
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
export declare const Textbox: FC<UITextboxProps>;
//# sourceMappingURL=textbox.d.ts.map