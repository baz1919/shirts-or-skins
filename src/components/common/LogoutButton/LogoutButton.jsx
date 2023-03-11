import * as React from "react";

const LogoutButton = ({ onLogout }) => (
  <button
    className="px-4 py-2 rounded-full bg-blue-200 h-10"
    onClick={onLogout}
    type="button"
  >
    Logout
  </button>
);

export default LogoutButton;
