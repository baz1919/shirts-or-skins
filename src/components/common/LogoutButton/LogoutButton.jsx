const LogoutButton = ({ onLogout }) => {
  return (
    <button
      className="px-4 py-2 rounded-full bg-cyan-500 h-10"
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
