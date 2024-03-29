import * as React from "react";
import { SearchIcon } from "./SearchIcon";

export function Search({ handleClick }) {
  const [query, setQuery] = React.useState("");

  const handleChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div className="search-form">
      <SearchIcon size="32" color="#7accb7" />
      <input
        value={query}
        type="text"
        name="query"
        id="query"
        placeholder="Search"
        onChange={handleChange}
      />
      <label className="visuallyhidden" htmlFor="query">
        Search for movie
      </label>
      <button className="search-btn" onClick={() => handleClick(query)}>
        Search
      </button>
    </div>
  );
}
