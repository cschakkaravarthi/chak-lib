import React, { FC } from 'react';
import { Category } from '../interfaces';
import EventModel from './../seeds/event.model';
export interface EventCardProps {
    imageUrl?: string;
    title: string;
    date?: string;
    isFetching?: boolean;
    location?: string;
    categories?: Category[];
    MainLink?: React.ComponentType;
    AddToCalenderLink?: (e: React.SyntheticEvent) => void;
    SendInviteEventData?: EventModel | undefined;
}
export declare const EventCardEmbedded: FC<EventCardProps>;
//# sourceMappingURL=eventCardEmbedded.d.ts.map