import * as React from "react";
import ky from "ky";
import { Link } from "@reach/router";

export function DetailView({
  location: {
    state: { item }
  }
}) {
  const [movie, setMovie] = React.useState(null);

  function parseHours(time: string): string {
    const minutes: number = Number(time.split(" ")[0]);
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}min`;
  }

  React.useEffect(() => {
    const getMovie = async () => {
      const apiKey: string = "3c2930e6";
      const baseUrl: string = `https://www.omdbapi.com/`;
      const url: string = `${baseUrl}?apikey=${apiKey}&i=${item.imdbID}`;
      const parsed = await ky.get(url).json();
      if (parsed.Response === "True") {
        setMovie(parsed);
      } else {
        setMovie([]);
      }
    };
    getMovie();
  }, [item]);

  if (movie === null) return <main>Loading...</main>;

  return (
    <main className="detail">
      <Link to="../" className="detail-back">{`<- Back`}</Link>
      <div className="detail-img">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>
        <h3>{movie.Title}</h3>
        <p className="detail-genre">{movie.Genre}</p>
        <p>{movie.Plot}</p>
        <p>
          <span className="detail-directors">
            Directors: <span className="detail-director">{movie.Director}</span>
          </span>
        </p>
        <p className="detail-actors">
          Actors:<span className="detail-actor">{` ${movie.Actors}`}</span>
        </p>
        <p className="detail-meta">
          <span>{parseHours(movie.Runtime)}</span>
          <span>{movie.Released}</span>
        </p>
        <p />
      </div>
    </main>
  );
}
