import * as React from "react";
import { Search } from "./Search";
import { List } from "./List";
import { movies } from "../data/movies.js";

export function MovieSearchList() {
  const [query, setQuery] = React.useState("");
  const [movielist, setMovielist] = React.useState([]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  React.useEffect(() => {
    setMovielist(movies);
  }, [query]);

  return (
    <>
      <Search query={query} handleChange={handleChange} />
      <List list={movielist} />
    </>
  );
}
