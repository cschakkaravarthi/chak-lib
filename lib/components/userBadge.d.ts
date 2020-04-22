import React, { FC } from 'react';
export interface UserBadgeProps {
    fullName: string;
    imageUrl: string;
    className?: string;
    isFetching?: boolean;
    circleSkeleton?: boolean;
    handleClick: (e: React.SyntheticEvent) => void;
}
export declare const UserBadge: FC<UserBadgeProps>;
//# sourceMappingURL=userBadge.d.ts.map