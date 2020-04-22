import React, { FC } from 'react';
export interface KnowledgeBaseSearchCardProps {
    title: string;
    date?: string;
    authorName?: string;
    isFetching?: boolean;
    searchKeyword?: string;
    searchSummary?: JSX.Element;
    MainLink?: React.ComponentType;
}
export declare const KnowledgeBaseSearchCard: FC<KnowledgeBaseSearchCardProps>;
//# sourceMappingURL=knowledgeBaseSearchCard.d.ts.map