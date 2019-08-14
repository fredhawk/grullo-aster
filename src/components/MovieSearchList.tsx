import * as React from "react";
import ky from "ky";
import { Search } from "./Search";
import { List } from "./List";
// import { movies } from "../data/movies.js";

export function MovieSearchList() {
  const [searchString, setSearchString] = React.useState("");
  const [movielist, setMovielist] = React.useState([]);

  const handleClick = querystring => {
    setSearchString(querystring);
  };

  const getMovies = async () => {
    const apiKey: string = "3c2930e6";
    const baseUrl: string = `https://www.omdbapi.com/`;
    const search: string = searchString;
    const url: string = `${baseUrl}?apikey=${apiKey}&t=${search}`;
    const parsed = await ky.get(url).json();
    const movies = [];
    if (parsed.Response === "True") {
      movies.push(parsed);
    }
    setMovielist(movies);
  };

  React.useEffect(() => {
    getMovies();
  });

  return (
    <>
      <section className="search">
        <Search handleClick={handleClick} />
      </section>
      <section className="list">
        <List list={movielist} />
      </section>
    </>
  );
}
