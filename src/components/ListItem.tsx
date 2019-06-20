import * as React from "react";
import { Link } from "@reach/router";

export function ListItem({ item }) {
  return (
    <li>
      {/* <div class="card"> */}
      <Link to={`/${item.id}`} state={{ item }}>
        <div className="poster">
          <img src={item.poster_img} alt={item.title} />
        </div>
        <div className="info">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <p>More info...</p>
      </Link>
      <hr />
      {/* </div> */}
    </li>
  );
}
