import React, { FC } from 'react';
export interface LinkSearchCardProps {
    title: string;
    imageSrc?: string;
    isFetching?: boolean;
    searchKeyword?: string;
    searchSummary?: JSX.Element;
    imageWidth?: number | string;
    imageHeight?: number | string;
    MainLink?: React.ComponentType;
}
export declare const LinkSearchCard: FC<LinkSearchCardProps>;
//# sourceMappingURL=linkSearchCard.d.ts.map