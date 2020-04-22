import React, { FC } from 'react';
export interface PeopleSearchCardProps {
    title: string;
    mail?: string;
    imageUrl?: string;
    designation?: string;
    companyName?: string;
    phoneNumber?: string;
    isFetching?: boolean;
    workLocation?: string;
    searchKeyword?: string;
    isCurrentUser?: boolean;
    circleSkeleton?: boolean;
    addToContactIcon?: string;
    MailLink?: React.ComponentType;
    ZoomLink?: React.ComponentType;
    MainLink?: React.ComponentType;
    PhoneLink?: React.ComponentType;
    handleAddToContacts?: (e: React.SyntheticEvent) => void;
}
export declare const PeopleSearchCard: FC<PeopleSearchCardProps>;
//# sourceMappingURL=peopleSearchCard.d.ts.map