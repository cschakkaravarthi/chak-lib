import React, { FC } from 'react';
export interface OfficesCardProps {
    type?: string;
    title?: string;
    address?: string;
    drupal_id?: number;
    className?: string;
    onCardClick?: (e: React.SyntheticEvent) => void;
}
export declare const OfficesCard: FC<OfficesCardProps>;
//# sourceMappingURL=officesCard.d.ts.map