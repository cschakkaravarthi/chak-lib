import React from 'react';

import { shallowRender } from '../services/testHelper';
import { SearchBar } from './searchbar';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const tree = shallowRender(
      <SearchBar
        handleSubmit={() => { alert('clicked'); }}
        handleChange={() => { alert('clicked'); }}
        searchTerm=""
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
