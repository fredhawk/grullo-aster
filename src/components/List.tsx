import * as React from "react";
import { ListItem } from "./ListItem";

export function List({ list }) {
  console.log(list);
  return (
    <ul className="list">
      {list.length > 0 ? (
        list.map(
          (listitem: object): React.ReactElement => (
            <ListItem key={listitem.imdbID} item={listitem} />
          )
        )
      ) : (
        <p>No result</p>
      )}
    </ul>
  );
}
