import { FC } from 'react';
import '../../scss/_modal.scss';
export interface ConfirmationModalProps {
    show: boolean;
    dialogMessage: string;
    okayButtonText?: string;
    cancelButtonText?: string;
    handleClose: () => void;
    handleSave: () => void;
}
export declare const ConfirmationModal: FC<ConfirmationModalProps>;
//# sourceMappingURL=confirmationModal.d.ts.map