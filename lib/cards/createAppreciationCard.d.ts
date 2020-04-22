import React, { FC } from 'react';
import '../../scss/_archive-appreciation.scss';
export interface CreateAppreciationCardProps {
    name?: string;
    title: string;
    altImg?: string;
    senderName?: string;
    imgTopSrc?: string;
    imgBottomSrc?: string;
    appreciationText?: string;
    onClick?: (e?: React.SyntheticEvent) => void;
}
export declare const CreateAppreciationCard: FC<CreateAppreciationCardProps>;
//# sourceMappingURL=createAppreciationCard.d.ts.map