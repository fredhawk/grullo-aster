import * as React from "react";
import { ListItem } from "./ListItem";

export function List({ list }) {
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
