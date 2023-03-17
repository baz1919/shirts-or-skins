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
      <div>
        <h1>
          Calendar
        </h1>
        <button type="button" onClick={handleCreateMatch}>
          Create match on
          {" "}
          {date}
        </button>
        <br />
        <button type="button" onClick={toggleCalendar}>Close</button>
      </div>
    );
  }

  return <button type="button" onClick={toggleCalendar} className="px-4 py-2 rounded-full bg-blue-200 h-10 my-4 text">Create match</button>;
};

export default CreateMatch;
