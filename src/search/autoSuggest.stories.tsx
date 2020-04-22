import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { AutoSuggest } from './autoSuggest';

export default {
  component: AutoSuggest,
  title: 'autoSuggest'
};

export const autoSuggest = (): JSX.Element => (

  <StoriesContainer>
    <div className="dark-background">
      <AutoSuggest
        handleSubmit={() => { alert('clicked'); }}
        miniNoOfCharsShowSuggestions={2}
        suggestions={[]}
        handleSelected={() => { }}
        getSuggestions={() => { }}
        manualSearch={() => { }}
        suggestionValue=""
        onSuggestionsClearRequested={() => { }}
      />
    </div>
  </StoriesContainer>
);

export const searchBarMobile = (): JSX.Element => (

  <StoriesContainer>
    <AutoSuggest
      handleSubmit={() => { alert('clicked'); }}
      miniNoOfCharsShowSuggestions={2}
      suggestions={[]}
      handleSelected={() => { }}
      getSuggestions={() => { }}
      manualSearch={() => { }}
      suggestionValue=""
      onSuggestionsClearRequested={() => { }}
      isMobileSearchBar={true}
    />
  </StoriesContainer>
);
