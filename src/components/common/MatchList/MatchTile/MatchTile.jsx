import * as React from "react";

// import pitchBg from "../../../../img/pitch.jpg";

import "./MatchTile.css";

const MatchTile = ({ players: { team1, team2 }, date }) => (
  <article className="tile">
    {/* <img src={pitchBg} alt="Football pitch" className="background" /> */}
    <div>
      <h3>Shirts</h3>
      <p>vs</p>
      <h3>Skins</h3>
    </div>
    <div>
      <div>
        {team1.map(({ displayName }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>{displayName}</p>
        ))}
      </div>
      <div>
        <p>{new Date(date).toDateString()}</p>
        <p>{new Date(date).toLocaleTimeString()}</p>
        <button
          onClick={() => {
            // TODO
            // eslint-disable-next-line no-alert
            alert("TO DO");
          }}
          type="button"
          className="contrast"
        >
          Edit Match
        </button>
      </div>
      <div>
        {team2.map(({ displayName }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>{displayName}</p>
        ))}
      </div>
    </div>
  </article>
);

export default MatchTile;
