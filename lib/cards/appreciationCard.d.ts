import React, { FC } from 'react';
import '../../scss/_archive-appreciation.scss';
export interface AppreciationCardProps {
    name?: string;
    title: string;
    senderName?: string;
    imgTopSrc?: string;
    imgBottomSrc?: string;
    appreciationText?: string;
    onClick?: (e?: React.SyntheticEvent) => void;
}
export declare const AppreciationCard: FC<AppreciationCardProps>;
//# sourceMappingURL=appreciationCard.d.ts.map