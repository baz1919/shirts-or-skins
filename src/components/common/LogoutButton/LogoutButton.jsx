// import { useEffect } from "react";

const LogoutButton = ({ onLogout }) => {
  return (
    <button className="px-4 py-2 rounded-full bg-cyan-500" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
