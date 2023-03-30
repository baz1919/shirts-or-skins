import * as React from "react";
import { useRouter } from "next/router";

const Match = () => {
  const { query } = useRouter();

  const handleClick = () => {
    alert("Delete Match");
  };

  return (
    <>
      <h3>We are on the match page of {query?.mid}</h3>
      <button type="button" className="secondary" onClick={handleClick}>
        Delete Match
      </button>
    </>
  );
};

export default Match;
