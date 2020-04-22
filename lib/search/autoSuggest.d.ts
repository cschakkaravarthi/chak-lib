import React, { FC } from 'react';
import '../../scss/_forms.scss';
export interface SearchSuggest {
    value: string;
    label: string;
}
export interface HandleSelectedResponseParams {
    value: string;
    label?: string;
    reason?: 'input-changed' | 'input-focused' | 'escape-pressed' | 'suggestions-revealed' | 'suggestion-selected';
}
export interface SearchBarProps {
    handleSubmit?: (e: React.SyntheticEvent) => void;
    suggestions: Array<SearchSuggest>;
    handleSelected: (selected: HandleSelectedResponseParams) => void;
    getSuggestions: (queryText: string) => void;
    manualSearch: (value: string) => void;
    miniNoOfCharsShowSuggestions: number;
    placeHolder?: string;
    onSuggestionsClearRequested?: () => void;
    suggestionValue: string;
    isMobileSearchBar?: boolean;
}
export declare const AutoSuggest: FC<SearchBarProps>;
//# sourceMappingURL=autoSuggest.d.ts.map