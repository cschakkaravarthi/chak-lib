import React, { FC } from 'react';
import { Category } from '../interfaces';
import EventModel from './../seeds/event.model';
export interface EventCardFullProps {
    imageUrl?: string;
    title: string;
    subtitle?: string;
    content?: JSX.Element;
    date?: string;
    location?: string;
    categories?: Category[];
    AddToCalenderLink?: (e: React.SyntheticEvent) => void;
    SendInviteEventData?: EventModel | undefined;
}
export declare const EventCardFull: FC<EventCardFullProps>;
//# sourceMappingURL=eventCardFull.d.ts.map