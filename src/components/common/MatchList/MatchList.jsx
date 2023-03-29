import * as React from "react";

import { useMatches } from "../../../graphql/hooks";
import MatchTile from "./MatchTile";

const MatchList = () => {
  const { matches } = useMatches();

  return matches.length ? (
    <div>
      {matches.map(({ id, players, date }) => (
        <MatchTile key={id} id={id} players={players} date={date} />
      ))}
    </div>
  ) : (
    <h3>No matches found</h3>
  );
};

export default MatchList;
