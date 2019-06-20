import * as React from "react";
import { ListItem } from "./ListItem";

export function List({ list }) {
  return (
    <ul>
      {list.length > 0 ? (
        list.map((listitem: object) => (
          <ListItem key={listitem.id} item={listitem} />
        ))
      ) : (
        <p>No result</p>
      )}
    </ul>
  );
}
