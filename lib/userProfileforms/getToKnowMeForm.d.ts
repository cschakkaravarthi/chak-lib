import React, { FC } from 'react';
import { GetToKnowMeCardProps } from '../interfaces';
import '../../scss/_forms.scss';
export interface GetToKnowMeFormProps extends GetToKnowMeCardProps {
    hideBirthdayOnProfile?: boolean;
    hideAnniversaryOnProfile?: boolean;
    handleCheckboxWithIdentifier?: (e: React.SyntheticEvent, uniqueIdentifier: string) => void;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: (e: React.SyntheticEvent) => void;
    handleCancel: (e: React.SyntheticEvent) => void;
    handleHideBirthday: (e: React.SyntheticEvent) => void;
    handleHideAnniversary: (e: React.SyntheticEvent) => void;
    textBoxMaxLength?: number;
    textArearBoxMaxLength?: number;
}
export declare const GetToKnowMeForm: FC<GetToKnowMeFormProps>;
//# sourceMappingURL=getToKnowMeForm.d.ts.map