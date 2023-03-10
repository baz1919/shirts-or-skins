import { useMatches } from "../../../graphql/hooks";

const MatchList = () => {
  const { matches } = useMatches();

  return matches.length ? (
    <ul>
      {matches.map(({ id, team1, team2, date }) => (
        <button
          onClick={() => {
            console.log(`Going to match: ${id}`);
          }}
          key={id}
          className="flex flex-col rounded-lg bg-cyan-500 p-3"
        >
          <li>
            <div className="text-slate-300">
              {new Date(date).toDateString()}
            </div>
            <div className="text-slate-300">
              {new Date(date).toLocaleTimeString()}
            </div>
            <div className="flex justify-evenly">
              <h3 className="text-slate-300">{team1}</h3>
              <p className="text-slate-300">vs</p>
              <h3 className="text-slate-300">{team2}</h3>
            </div>
          </li>
        </button>
      ))}
    </ul>
  ) : (
    <h3>No matches found</h3>
  );
};

export default MatchList;
