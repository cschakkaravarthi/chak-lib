import React from 'react';
import StoriesContainer from '../StoriesContainer';
import { SearchBar } from './searchbar';

export default {
  component: SearchBar,
  title: 'Search Bar'
};

export const searchbar = (): JSX.Element => (
  <StoriesContainer>
    <div className="dark-background">
      <SearchBar
        handleSubmit={() => { alert('clicked'); }}
        handleChange={() => { alert('clicked'); }}
        searchTerm=""
      />
    </div>
  </StoriesContainer>
);
