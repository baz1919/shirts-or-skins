import Link from "next/link";
import * as React from "react";

import { useJoinMatch } from "graphql/hooks";

import styles from "./MatchTile.module.css";

const MatchTile = ({ players: { team1, team2 }, date, id }) => {
  const { joinMatch } = useJoinMatch();

  const handleJoin = async () => {
    try {
      await joinMatch(id);
      alert("Successfully joined match");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLeave = () => {
    alert("LEAVE MATCH");
  };

  return (
    <article className={styles.tile}>
      <div className={styles.row}>
        <h3>Shirts</h3>
        <p>v</p>
        <h3>Skins</h3>
      </div>
      <div className={styles.row}>
        <div>
          {team1.map(({ displayName }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index}>{displayName}</p>
          ))}
        </div>
        <div>
          <p>{new Date(date).toDateString()}</p>
          <p>{new Date(date).toLocaleTimeString()}</p>
          <button type="button" onClick={handleJoin}>
            Join
          </button>
          <button
            type="button"
            className="secondary outline"
            onClick={handleLeave}
          >
            Leave Match
          </button>
          <Link href={`/match/${id}`}>
            <button type="button" className="outline">
              Edit Match
            </button>
          </Link>
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
};

export default MatchTile;
