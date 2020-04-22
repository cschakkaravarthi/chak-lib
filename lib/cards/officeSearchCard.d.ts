import React, { FC } from 'react';
export interface OfficeSearchCardProps {
    title: string;
    isFetching?: boolean;
    searchKeyword?: string;
    MainLink?: React.ComponentType;
    officeAddress?: JSX.Element | string;
}
export declare const OfficeSearchCard: FC<OfficeSearchCardProps>;
//# sourceMappingURL=officeSearchCard.d.ts.map