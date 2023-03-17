import * as React from "react";

import pitchBg from "../../../../img/pitch.jpg";

const MatchTile = ({ id, players: { team1, team2 }, date }) => (
  <li
    key={id}
    className="flex flex-col align-middle w-full max-w-4xl my-2 rounded-lg p-3 drop-shadow-sm relative bg-gradient-to-b from-slate-700 to-slate-800 overflow-hidden"
  >
    <img src={pitchBg} alt="Football pitch" className="object-cover absolute mix-blend-overlay -z-10 top-0 left-0" />
    <div className="flex justify-evenly m-1">
      <h3 className="text-2xl">
        Shirts
      </h3>
      <p>vs</p>
      <h3 className="text-2xl">
        Skins
      </h3>
    </div>
    <div className="flex justify-evenly">
      <div className="w-24 text-center">
        {team1.map(({ displayName }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>{displayName}</p>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <p>
          {new Date(date).toDateString()}
        </p>
        <p className="text-center font-semibold">
          {new Date(date).toLocaleTimeString()}
        </p>
        <button
          className="my-2 px-4 py-2 rounded-full bg-slate-800 h-10 text-base border"
          onClick={() => {
            // TODO
            // eslint-disable-next-line no-alert
            alert("TO DO");
          }}
          type="button"
        >
          Edit Match
        </button>
      </div>
      <div className="w-24 text-center">
        {team2.map(({ displayName }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>{displayName}</p>
        ))}
      </div>
    </div>
  </li>
);

export default MatchTile;
