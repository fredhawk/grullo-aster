import * as React from "react";
import { Link } from "@reach/router";

export function DetailView({
  location: {
    state: { item }
  }
}) {
  function parseHours(time: string): string {
    const minutes: number = Number(time.split(" ")[0]);
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}min`;
  }
  return (
    <main className="detail">
      <Link to="../" className="detail-back">{`<- Back`}</Link>
      <div className="detail-img">
        <img src={item.Poster} alt={item.Title} />
      </div>
      <div>
        <h3>{item.Title}</h3>
        <p className="detail-genre">
          {/* {item.genres.map(
            (genre: string, i: number): string => {
              if (item.genres.length - 1 === i) return `${genre}`;
              return `${genre}, `;
            }
          )} */}
          {item.Genre}
        </p>
        <p>{item.description}</p>
        <p>
          <span className="detail-directors">
            Directors: <span className="detail-director">{item.Director}</span>
          </span>
          {/* {item.directors.map(
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
          )} */}
        </p>
        <p className="detail-actors">
          Actors:<span className="detail-actor">{` ${item.Actors}`}</span>
          {/* {item.actors.map(
            (actor: string, i: number): React.ReactElement => {
              if (item.actors.length - 1 === i)
                return (
                  <span key={i} className="detail-actor">{`${actor} `}</span>
                );
              return (
                <span key={i} className="detail-actor">{`${actor}, `}</span>
              );
            }
          )} */}
        </p>
        <p className="detail-meta">
          <span>{parseHours(item.Runtime)}</span>
          {/* <span>{format(item.release_date, "YYYY-MM-DD")}</span> */}
          <span>{item.Released}</span>
        </p>
        <p />
      </div>
    </main>
  );
}
