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
    <main className="detail">
      <Link to="../" className="detail-back">{`<- Back`}</Link>
      <div className="detail-img">
        <img src={item.poster_img} alt={item.title} />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p className="detail-genre">
          {item.genres.map(
            (genre: string, i: number): string => {
              if (item.genres.length - 1 === i) return `${genre}`;
              return `${genre}, `;
            }
          )}
        </p>
        <p>{item.description}</p>
        <p>
          <span className="detail-directors">{`Directors: `}</span>
          {item.directors.map(
            (director: string, i: number): React.ReactElement => {
              if (item.directors.length - 1 === i)
                return (
                  <span
                    key={i}
                    className="detail-director"
                  >{`${director} `}</span>
                );
              return (
                <span
                  key={i}
                  className="detail-director"
                >{`${director}, `}</span>
              );
            }
          )}
        </p>
        <p className="detail-actors">
          Actors:{" "}
          {item.actors.map(
            (actor: string, i: number): React.ReactElement => {
              if (item.actors.length - 1 === i)
                return (
                  <span key={i} className="detail-actor">{`${actor} `}</span>
                );
              return (
                <span key={i} className="detail-actor">{`${actor}, `}</span>
              );
            }
          )}
        </p>
        <p className="detail-meta">
          <span>{parseHours(item.playtime)}</span>
          <span>{format(item.release_date, "YYYY-MM-DD")}</span>
        </p>
        <p />
      </div>
    </main>
  );
}
