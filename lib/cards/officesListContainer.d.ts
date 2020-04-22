import { FC } from 'react';
import { OfficesCardProps } from './officesCard';
interface OfficesListProps {
    drupal_id?: number;
    placeName?: string;
    officeList?: OfficesCardProps[];
    categoryType?: string;
}
export interface OfficesCardContainerProps {
    title: string;
    type?: string;
    variant?: string;
    officeData?: OfficesListProps[];
    onCardClick?: (items: OfficesCardProps) => void;
}
export declare const OfficesListContainer: FC<OfficesCardContainerProps>;
export {};
//# sourceMappingURL=officesListContainer.d.ts.map