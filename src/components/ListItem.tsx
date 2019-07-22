import * as React from 'react';
import { Link } from '@reach/router';

export function ListItem({ item }) {
  return (
    <li>
      <Link to={`/${item.id}`} state={{ item }} className="list-item">
        <div className="poster">
          <img src={item.poster_img} alt={item.title} />
        </div>
        <div className="info">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>More info...</p>
        </div>
      </Link>
    </li>
  );
}
