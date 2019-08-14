import * as React from "react";
import { Link } from "@reach/router";

export function ListItem({ item }) {
  return (
    <li>
      <Link to={`/${item.imdbID}`} state={{ item }} className="list-item">
        <div className="poster">
          <img src={item.Poster} alt={item.Title} />
        </div>
        <div className="info">
          <h3>{item.Title}</h3>
          <p>{item.Plot}</p>
          <p>More info...</p>
        </div>
      </Link>
    </li>
  );
}
