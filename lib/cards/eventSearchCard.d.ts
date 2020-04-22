import React, { FC } from 'react';
import EventModel from './../seeds/event.model';
export interface EventSearchCardProps {
    title: string;
    date?: string;
    location?: string;
    MainLink?: React.ComponentType;
    MoreInfoLink?: React.ComponentType;
    AddToCalenderLink?: (e: React.SyntheticEvent) => void;
    SendInviteEventData?: EventModel | undefined;
    searchKeyword?: string;
}
export declare const EventSearchCard: FC<EventSearchCardProps>;
//# sourceMappingURL=eventSearchCard.d.ts.map