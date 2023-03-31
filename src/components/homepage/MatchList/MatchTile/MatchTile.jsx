import Link from "next/link";
import * as React from "react";

import Modal from "components/common/Modal/Modal";
import { useJoinMatch } from "graphql/hooks";

import styles from "./MatchTile.module.css";

const MatchTile = ({ players: { team1, team2 }, date, id, inMatch }) => {
  const { joinMatch } = useJoinMatch();
  const [displayModal, setDisplayModal] = React.useState(false);

  const handleJoin = async () => {
    try {
      await joinMatch(id);
      // eslint-disable-next-line no-console
      console.log("Successfully joined match");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("Set display modal");
      setDisplayModal(true);
    }
  };

  const handleLeave = () => {
    // eslint-disable-next-line no-console
    console.log("Leaving Match");
  };

  console.log(id, inMatch);

  return (
    <>
      {displayModal ? (
        <Modal
          title="Already Registered"
          description="You are already signed up to this match"
          onClick={() => setDisplayModal(false)}
        />
      ) : null}
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
            {inMatch ? (
              <button type="button" className="secondary" onClick={handleLeave}>
                Leave Match
              </button>
            ) : (
              <button type="button" onClick={handleJoin}>
                Join
              </button>
            )}
          </div>
          <div>
            {team2.map(({ displayName }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={index}>{displayName}</p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default MatchTile;
