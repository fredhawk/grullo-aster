import * as React from "react";
import ky from "ky";
import { Search } from "./Search";
import { List } from "./List";

export function MovieSearchList() {
  const [searchString, setSearchString] = React.useState("");
  const [movielist, setMovielist] = React.useState(null);
  const [isSearched, setIsSearched] = React.useState(false);

  const handleClick = querystring => {
    setSearchString(querystring);
  };

  React.useEffect(() => {
    const getMovies = async () => {
      const apiKey: string = "3c2930e6";
      const baseUrl: string = `https://www.omdbapi.com/`;
      const search: string = searchString;
      const url: string = `${baseUrl}?apikey=${apiKey}&s=${search}`;
      const parsed = await ky.get(url).json();
      if (parsed.Response === "True") {
        setMovielist(parsed.Search);
        setIsSearched(true);
      } else {
        setMovielist([]);
        setIsSearched(false);
      }
    };
    getMovies();
  }, [searchString]);

  return (
    <>
      <section className="search">
        <Search handleClick={handleClick} />
      </section>
      {isSearched && (
        <section className="list">
          <List list={movielist} />
        </section>
      )}
    </>
  );
}
