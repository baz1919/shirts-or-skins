import * as React from "react";

const LogoutButton = ({ onLogout }) => (
  <button onClick={onLogout} type="button">
    Logout
  </button>
);

export default LogoutButton;
