import * as React from "react";
import { useTransition, animated } from "react-spring";
import { ListItem } from "./ListItem";

export function List({ list }) {
  const transition = useTransition(list, item => item.imdbID, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    config: { duration: 300 }
  });

  return (
    <ul className="list">
      {transition.map(
        ({ item, props, key }): React.ReactElement => (
          <animated.div key={key} style={props}>
            <ListItem item={item} />
          </animated.div>
        )
      )}
    </ul>
  );
}
