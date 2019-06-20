import * as React from "react";
import { format } from "date-fns";
import { Link } from "@reach/router";

export function DetailView({
  location: {
    state: { item }
  }
}) {
  function parseHours(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}min`;
  }
  return (
    <main>
      <Link to="../">{`<- Back`}</Link>
      <div className="poster">
        <img src={item.poster_img} alt={item.title} />
      </div>
      <div className="info">
        <h3>{item.title}</h3>
        <p>
          {item.genres.map(
            (genre: string, i: number): string => {
              if (item.genres.length - 1 === i) return `${genre}`;
              return `${genre}, `;
            }
          )}
        </p>
        <p>{item.description}</p>
        <p>
          Directors:
          {item.directors.map(
            (director: string, i: number): string => {
              if (item.directors.length - 1 === i) return `${director}`;
              return `${director}, `;
            }
          )}
        </p>
        <p>
          Actors:{" "}
          {item.actors.map(
            (actor: string, i: number): string => {
              if (item.actors.length - 1 === i) return `${actor}`;
              return `${actor}, `;
            }
          )}
        </p>
        <p>{parseHours(item.playtime)}</p>
        <p>{format(item.release_date, "YYYY-MM-DD")}</p>
      </div>
    </main>
  );
}
