import React, { FC } from 'react';
export interface ContentWrapperProps {
    title: string;
    subtitle?: string;
    bodyClass?: string;
    topBorder?: string;
    titleClass?: string;
    wrapperClass?: string;
    subtitleClass?: string;
    rightCornerComponentText?: string;
    RightCornerComponent?: React.ComponentType;
    showContentTop?: boolean;
}
export declare const ContentWrapper: FC<ContentWrapperProps>;
//# sourceMappingURL=contentWrapper.d.ts.map