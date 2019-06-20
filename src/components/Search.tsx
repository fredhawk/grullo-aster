import * as React from 'react';

export function Search({ query, handleChange }) {
  return (
    <section className="search">
      <label htmlFor="query">
        Search for movie
        <input
          value={query}
          type="text"
          name="query"
          id="query"
          placeholder="Ex. Matrix"
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
