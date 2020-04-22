import React, { FC } from 'react';
import '../../scss/_forms.scss';
export interface SearchBarProps {
    handleSubmit: (e: React.SyntheticEvent) => void;
    handleChange: (e: React.SyntheticEvent) => void;
    searchTerm?: string;
}
export declare const SearchBar: FC<SearchBarProps>;
//# sourceMappingURL=searchbar.d.ts.map