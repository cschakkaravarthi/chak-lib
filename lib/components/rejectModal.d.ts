import React, { FC } from 'react';
import '../../scss/_modal.scss';
export interface RejectModalProps {
    show: boolean;
    dialogMessage: string;
    rejectButtonText?: string;
    cancelButtonText?: string;
    handleClose: () => void;
    handleReject: () => void;
    textAreaMaxLength?: number;
    rejectMessage?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const RejectModal: FC<RejectModalProps>;
//# sourceMappingURL=rejectModal.d.ts.map