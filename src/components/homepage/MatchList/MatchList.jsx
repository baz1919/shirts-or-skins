import * as React from "react";

import { useMatches, useMyMatches } from "graphql/hooks";
import MatchTile from "components/homepage/MatchList/MatchTile";

const MatchList = () => {
  const { matches } = useMatches();
  const { myMatches } = useMyMatches();

  const checkInMatch = (id) => myMatches.some((match) => match.id === id);

  return matches.length ? (
    <div>
      <h3>Upcoming Matches</h3>
      {matches.map(({ id, players, date }) => (
        <MatchTile
          key={id}
          id={id}
          players={players}
          date={date}
          inMatch={checkInMatch(id)}
        />
      ))}
    </div>
  ) : (
    <h3>No matches found</h3>
  );
};

export default MatchList;
