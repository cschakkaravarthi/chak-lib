import { FC } from 'react';
import { Category } from '../interfaces';
export interface NotificationCardProps {
    title: string;
    isNew?: boolean;
    dateTime?: string;
    isArchive?: boolean;
    categories?: Category[];
    notificationType?: string;
    drupal_id?: number | undefined;
    body_full?: string | JSX.Element;
    body_summary?: string | JSX.Element;
    isApprove?: boolean;
    serviceNowLink?: string;
    onArchive?: (drupal_id: number | undefined) => void;
    onApprove?: (drupal_id: number | undefined) => void;
    onReject?: (drupal_id: number | undefined) => void;
}
export declare const NotificationCard: FC<NotificationCardProps>;
//# sourceMappingURL=notificationCard.d.ts.map