import { useMatches } from "../../../graphql/hooks";
import pitchBg from "../../../img/pitch.jpg";

const MatchList = () => {
  const { matches } = useMatches();

  return matches.length ? (
    <ul className="flex  flex-col align-middle w-4/5">
      {matches.map(({ id, players, date }) => (
        <li
          key={id}
          className="flex flex-col align-middle rounded-lg p-3 bg-gradient-to-b from-inherit to-green-900"
          style={{
            backgroundImage: `url(${pitchBg})`,
          }}
        >
          <div className="flex justify-evenly m-1">
            <h3 className="text-slate-300 font-bold text-lg shadow-slate-900">
              Shirts
            </h3>
            <p className="text-slate-300">vs</p>
            <h3 className="text-slate-300 font-bold text-lg">Skins</h3>
          </div>
          <div className="flex justify-evenly">
            <div className="align-middle">
              {players.team1.map(({ displayName }) => (
                <p className="text-slate-300">{displayName}</p>
              ))}
            </div>
            <div className="align-middle">
              <p className="text-slate-300 font-semibold">
                {new Date(date).toDateString()}
              </p>
              <p className="text-slate-300 text-center font-semibold">
                {new Date(date).toLocaleTimeString()}
              </p>
              <button
                className="my-2 px-4 py-2 rounded-full bg-indigo-500 h-10"
                onClick={() => console.log(`Edit match ${id}`)}
              >
                Edit Match
              </button>
            </div>
            <div className="align-middle">
              {players.team2.map(({ displayName }) => (
                <p className="text-slate-300">{displayName}</p>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <h3>No matches found</h3>
  );
};

export default MatchList;
