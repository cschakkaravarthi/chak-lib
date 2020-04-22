import React from 'react';

import { shallowRender } from '../services/testHelper';
import { AutoSuggest } from './autoSuggest';

describe('SearchBarAutoSuggest', () => {
  it('should render correctly', () => {
    const tree = shallowRender(
      <AutoSuggest
        handleSubmit={() => { alert('clicked'); }}
        suggestions={[]}
        getSuggestions={() => { alert('clicked'); }}
        handleSelected={() => { alert('clicked'); }}
        manualSearch={() => { alert('clicked'); }}
        miniNoOfCharsShowSuggestions={2}
        onSuggestionsClearRequested={() => { alert('clicked'); }}
        suggestionValue=""
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly mobile search bar', () => {
    const tree = shallowRender(
      <AutoSuggest
        handleSubmit={() => { alert('clicked'); }}
        suggestions={[]}
        getSuggestions={() => { alert('clicked'); }}
        handleSelected={() => { alert('clicked'); }}
        manualSearch={() => { alert('clicked'); }}
        miniNoOfCharsShowSuggestions={2}
        onSuggestionsClearRequested={() => { alert('clicked'); }}
        suggestionValue=""
        isMobileSearchBar={true}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
