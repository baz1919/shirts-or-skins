/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-redundant-roles */
import * as React from "react";
import { useCreateMatch } from "../../../graphql/hooks";

const CreateMatch = () => {
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [date] = React.useState(new Date().toISOString());

  const { createMatch } = useCreateMatch();

  const handleCreateMatch = () => {
    createMatch(date);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  if (showCalendar) {
    return (
      <article>
        <h1>Calendar</h1>
        <button type="button" className="half" onClick={handleCreateMatch}>
          Create match on {date}
        </button>
        <br />
        <button type="button" onClick={toggleCalendar}>
          Close
        </button>
      </article>
    );
  }

  return (
    <div>
      <button type="button" className="half secondary" onClick={toggleCalendar}>
        Create match
      </button>
      <h5>Or edit an existing one</h5>
    </div>
  );
};

export default CreateMatch;
