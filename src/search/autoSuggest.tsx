import React, { FC, useEffect, useState, ReactElement } from 'react';
import { Form as SourceForm, Button as SourceButton, InputGroup as SourceInputGroup, Image } from 'react-bootstrap';
import { images } from '../assets/images';

import '../../scss/_forms.scss';
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

const SearchAutoSuggest = Autosuggest as { new(): Autosuggest<SearchSuggest> };

export const AutoSuggest: FC<SearchBarProps> = props => {
  const [value, setValue] = useState<string>('');
  const [showClearButton, setClearButton] = useState<boolean>(false);

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

  const triggerManualSearch = (value: string): void => {
    return props.manualSearch(value);
  };

  const onChanges = (event: React.FormEvent<HTMLInputElement>, newValue: ChangeEvent): void => {
    triggerManualSearch(newValue.newValue);
    newValue.newValue.length > 0 ? setClearButton(true) : setClearButton(false); // --enable for clear button
    return setValue(newValue.newValue);
  };

  useEffect(() => {
    if (props.suggestionValue) {
      setValue(props.suggestionValue);
      setClearButton(true);
    } else {
      setValue('');
      setClearButton(false);
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

  const resetInputField = (): void => {
    setValue('');
    setClearButton(false);
  };

  const { isMobileSearchBar = false } = props;

  return (
    <SourceForm
      onSubmit={props.handleSubmit}
      className={`${isMobileSearchBar ? 'mobile-search-bar' : 'auto-suggest-form'} align-items-center d-flex`}
      onReset={resetInputField}
    >
      <SourceInputGroup >
        { !isMobileSearchBar && <SourceInputGroup.Prepend>
          <SourceButton className="pl-0 border-0" variant="outline-secondary" type="submit">
            <img
              src={images.searchIconWhite}
              className="search-icon"
            />
          </SourceButton>
        </SourceInputGroup.Prepend>}

        <SearchAutoSuggest
          suggestions={props.suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionSelected={onSuggestionsSelected}
          getSuggestionValue={getSuggestionValue}
          shouldRenderSuggestions={shouldRenderSuggestions}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
        />
        <div className={`${isMobileSearchBar ? '' : 'd-none'} d-lg-inline`}>
          {
            showClearButton && (
              <SourceInputGroup.Append>
                <SourceButton className="p-1 border-0" variant="outline-light" type="reset">
                  <Image
                    src={images.remove}
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </SourceButton>
              </SourceInputGroup.Append>
            )
          }
        </div>

        { isMobileSearchBar && <SourceInputGroup.Append>
          <SourceButton className="p-1 border-0" variant="outline-light" type="submit">
            <img
              src={images.searchIconGrey}
              className="search-icon"
            />
          </SourceButton>
        </SourceInputGroup.Append>}
      </SourceInputGroup>
    </SourceForm>
  );
};
