import * as React from "react";
import { ListItem } from "./ListItem";

export function List({ list }) {
  if (list.length === 0) return <p>Search for a movie.</p>;
  return (
    <ul className="list">
      {list.map(
        (listitem: object): React.ReactElement => (
          <ListItem key={listitem.imdbID} item={listitem} />
        )
      )}
    </ul>
  );
}
