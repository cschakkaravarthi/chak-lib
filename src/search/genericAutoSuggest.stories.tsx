import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { GenericAutoSuggest } from './genericAutoSuggest';

export default {
  component: GenericAutoSuggest,
  title: 'genericAutoSuggest'
};

const people = [
  {
    value: 'Charlie Brown',
    label: 'Charlie Brown'
  },
  {
    value: 'Charlotte White',
    label: 'Charlotte White'
  },
  {
    value: 'Chloe Jones',
    label: 'Chloe Jones'
  },
  {
    value: 'Cooper King',
    label: 'Cooper King'
  }
];

export const autoSuggest = (): JSX.Element => (

  <StoriesContainer>
    <div className="content-main mt-5 mb-5">
      <GenericAutoSuggest
        miniNoOfCharsShowSuggestions={2}
        suggestions={people}
        handleSelected={() => { }}
        getSuggestions={() => { }}
        suggestionValue=""
        onSuggestionsClearRequested={() => { }}
      />
    </div>
  </StoriesContainer>
);
