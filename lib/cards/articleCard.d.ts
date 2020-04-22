import React, { FC } from 'react';
import { Category } from '../interfaces';
export interface ArticleCardProps {
    imageUrl?: string;
    title: string;
    date?: string;
    isFetching?: boolean;
    pictureSkeletonHeight?: string | number;
    fullHeight?: boolean;
    categories?: Category[];
    likes?: number;
    MainLink?: React.ComponentType;
    handleThumbClick?: (e: React.SyntheticEvent) => void;
    likedStatus?: boolean;
}
export declare const ArticleCard: FC<ArticleCardProps>;
//# sourceMappingURL=articleCard.d.ts.map