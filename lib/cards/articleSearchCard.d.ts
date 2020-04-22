import React, { FC } from 'react';
export interface ArticleSearchCardProps {
    title: string;
    date?: string;
    imageUrl?: string;
    isFetching?: boolean;
    content?: JSX.Element;
    searchKeyword?: string;
    MainLink?: React.ComponentType;
}
export declare const ArticleSearchCard: FC<ArticleSearchCardProps>;
//# sourceMappingURL=articleSearchCard.d.ts.map