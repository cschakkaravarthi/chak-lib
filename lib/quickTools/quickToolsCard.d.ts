import React, { FC } from 'react';
export interface LinkProps {
    linkAction: React.ElementType;
    linkTitle: string | undefined;
}
export interface BasicQuickToolsCardProps {
    title: string;
    isFetching?: boolean;
    Links: Array<LinkProps>;
}
export declare const BasicQuickToolsCard: FC<BasicQuickToolsCardProps>;
//# sourceMappingURL=quickToolsCard.d.ts.map