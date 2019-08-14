import * as React from "react";
import ky from "ky";
import { Search } from "./Search";
import { List } from "./List";

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
    const url: string = `${baseUrl}?apikey=${apiKey}&s=${search}`;
    const parsed = await ky.get(url).json();
    if (parsed.Response === "True") {
      setMovielist(parsed.Search);
    } else {
      setMovielist([]);
    }
  };

  React.useEffect(() => {
    getMovies();
  }, [searchString]);

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
