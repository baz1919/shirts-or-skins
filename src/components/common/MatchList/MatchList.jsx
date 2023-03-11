import * as React from "react";

import { useMatches } from "../../../graphql/hooks";
import MatchTile from "./MatchTile";

const MatchList = () => {
  const { matches } = useMatches();

  return matches.length ? (
    <ul className="flex flex-col align-top items-center w-4/5 text-slate-200 font-semibold text-lg">
      {matches.map(({ id, players, date }) => (
        <MatchTile key={id} id={id} players={players} date={date} />
      ))}
    </ul>
  ) : (
    <h3>No matches found</h3>
  );
};

export default MatchList;
