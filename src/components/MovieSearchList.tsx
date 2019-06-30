import * as React from "react";
import { Search } from "./Search";
import { List } from "./List";
import { movies } from "../data/movies.js";

export function MovieSearchList() {
  const [string, setString] = React.useState("");
  const [movielist, setMovielist] = React.useState([]);

  const handleClick = querystring => {
    console.log(querystring);
    setString(querystring);
  };

  React.useEffect(() => {
    setMovielist(movies);
  }, [string]);

  return (
    <>
      <section className="search">
        <Search handleClick={handleClick} />
      </section>
      <section className="movielist">
        <List list={movielist} />
      </section>
    </>
  );
}
