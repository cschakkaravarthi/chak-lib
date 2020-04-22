import React, { FC } from 'react';
import { Category } from '../interfaces';
import EventModel from './../seeds/event.model';
export interface EventCardProps {
    imageUrl?: string;
    title: string;
    date?: string;
    location?: string;
    categories?: Category[];
    MainLink?: React.ComponentType;
    MoreInfoLink?: React.ComponentType;
    AddToCalenderLink?: (e: React.SyntheticEvent) => void;
    SendInviteEventData?: EventModel | undefined;
}
export declare const EventCard: FC<EventCardProps>;
//# sourceMappingURL=eventCard.d.ts.map