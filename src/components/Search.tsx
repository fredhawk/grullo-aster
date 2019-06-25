import * as React from 'react';
import { SearchIcon } from './SearchIcon';

export function Search({ query, handleChange }) {
  return (
    <section className="search">
      <SearchIcon size="32" color="black" />
      <input
        value={query}
        type="text"
        name="query"
        id="query"
        placeholder="Search for movie"
        onChange={handleChange}
      />
      <label className="visuallyhidden" htmlFor="query">
        Search for movie
      </label>
      <button>Search</button>
    </section>
  );
}
