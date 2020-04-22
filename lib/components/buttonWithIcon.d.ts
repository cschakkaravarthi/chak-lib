import { FC } from 'react';
import { UIButtonProps } from '../interfaces';
export interface ButtonWithIconProps extends UIButtonProps {
    imageSrc?: string;
    imageWidth?: number | string;
    imageHeight?: number | string;
    labelClassName?: string;
}
export declare const ButtonWithIcon: FC<ButtonWithIconProps>;
//# sourceMappingURL=buttonWithIcon.d.ts.map