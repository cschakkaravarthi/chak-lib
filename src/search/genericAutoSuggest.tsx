// To understand how to use this component refer to: https://www.npmjs.com/package/react-autosuggest
// Some tips:
// -Styling: This component has only basic styling (same styling as TextBox) so it can be used for different scenarios and that you can have the freedom to make look as you need.
//  To accomplish this you can pass it a object trough the prop called "theme". The most important one is probably gonna be the key input. You can pass it one
//  or more styles names like so: { input: 'rounded-0 form-control' }
//  You can also style the componente by overriding with css. In you choose this options make sure you don't pass the theme property.
// -Styling suggestions list: If you want the suggestion list to not close when the input is unfocused set alwaysRenderSuggestions to true.
// -Label: If you need to add a label to the input, you could use it nested in a <Form.Group> and use a regular <label>
// Try to keep this component as simple as possible so that it's easier to make it fit different scenarios/porpuses.

import React, { FC, useEffect, useState, ReactElement } from 'react';

import Autosuggest, { SuggestionSelectedEventData, SuggestionsFetchRequestedParams, ChangeEvent } from 'react-autosuggest';

export interface SearchSuggest {
  value: string;
  label: string;
}

export interface HandleSelectedResponseParams {
  value: string;
  label?: string;
  reason?:
  | 'input-changed'
  | 'input-focused'
  | 'escape-pressed'
  | 'suggestions-revealed'
  | 'suggestion-selected';
}

export interface GenericAutoSuggestProps {
  suggestions: Array<SearchSuggest>;
  handleSelected: (selected: HandleSelectedResponseParams) => void;
  getSuggestions: (queryText: string) => void;
  miniNoOfCharsShowSuggestions: number;
  placeHolder?: string;
  onSuggestionsClearRequested?: () => void;
  suggestionValue: string;
  isMobileSearchBar?: boolean;
  theme?: object;
  alwaysRenderSuggestions?: boolean;
}

const SearchAutoSuggest = Autosuggest as { new(): Autosuggest<SearchSuggest> };

export const GenericAutoSuggest: FC<GenericAutoSuggestProps> = props => {
  const [value, setValue] = useState<string>('');

  const getSuggestionValue = (suggestion: SearchSuggest): string => {
    const regex = /(<([^>]+)>)/ig;
    suggestion.value = suggestion.value.replace(regex, '');
    return suggestion.value;
  };

  const renderSuggestion = (suggestion: SearchSuggest): ReactElement => {
    return (
      <div dangerouslySetInnerHTML={{ __html: suggestion.label }} />
    );
  };

  const onChanges = (event: React.FormEvent<HTMLInputElement>, newValue: ChangeEvent): void => {
    return setValue(newValue.newValue);
  };

  useEffect(() => {
    if (props.suggestionValue) {
      setValue(props.suggestionValue);
    } else {
      setValue('');
    }
  }, [props.suggestionValue]);

  const onSuggestionsSelected = (event: React.FormEvent<HTMLInputElement>, suggested: SuggestionSelectedEventData<SearchSuggest>): void => {
    return props.handleSelected(suggested.suggestion);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = (changeReason: SuggestionsFetchRequestedParams): void => {
    props.getSuggestions(changeReason.value);
  };

  const inputProps = {
    placeholder: props.placeHolder,
    value,
    onChange: onChanges
  };

  const shouldRenderSuggestions = (value: string): boolean => {
    return value.trim().length > props.miniNoOfCharsShowSuggestions;
  };

  const onSuggestionsClearRequested = (): void => {
    props.onSuggestionsClearRequested && props.onSuggestionsClearRequested();
  };

  return (
    <div className="generic-auto-suggest">
      <SearchAutoSuggest
        suggestions={props.suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionSelected={onSuggestionsSelected}
        getSuggestionValue={getSuggestionValue}
        shouldRenderSuggestions={shouldRenderSuggestions}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        theme={props.theme}
        alwaysRenderSuggestions={props.alwaysRenderSuggestions}
      />
    </div>
  );
};
