import React, { FC } from 'react';
import { Category } from '../interfaces';
export interface ArticleCardFeaturedProps {
    imageUrl?: string;
    title: string;
    isFetching?: boolean;
    summary?: JSX.Element | string;
    pictureSkeletonHeight?: string | number;
    date?: string;
    likes?: number;
    categories?: Category[];
    MainLink?: React.ComponentType;
    handleThumbClick?: (e: React.SyntheticEvent) => void;
    likedStatus?: boolean;
}
export declare const ArticleCardFeatured: FC<ArticleCardFeaturedProps>;
//# sourceMappingURL=articleCardFeatured.d.ts.map