import { FC } from 'react';
import '../../scss/_modal.scss';
export interface AlertModalProps {
    show: boolean;
    dialogMessage: string;
    alertButtonText?: string;
    handleClose: () => void;
}
export declare const AlertModal: FC<AlertModalProps>;
//# sourceMappingURL=alertModal.d.ts.map