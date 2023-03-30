import * as React from "react";
import { useCreateMatch } from "graphql/hooks";

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
        <button type="button" onClick={handleCreateMatch}>
          Create match on {date}
        </button>
        <br />
        <button
          type="button"
          className="half secondary"
          onClick={toggleCalendar}
        >
          Close
        </button>
      </article>
    );
  }

  return (
    <div>
      <button type="button" className="half" onClick={toggleCalendar}>
        Create new match
      </button>
    </div>
  );
};

export default CreateMatch;
