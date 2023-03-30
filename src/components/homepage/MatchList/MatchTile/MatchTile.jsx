import Link from "next/link";
import * as React from "react";

import styles from "./MatchTile.module.css";

const MatchTile = ({ players: { team1, team2 }, date, id }) => (
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

export default MatchTile;
