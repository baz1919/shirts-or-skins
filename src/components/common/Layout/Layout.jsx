import * as React from "react";
import NavBar from "../NavBar";
import LoginForm from "../../login/LoginForm";

import { getUser, logout } from "../../../utils/auth";

const Layout = ({ initialUser, children }) => {
  const [user, setUser] = React.useState(initialUser || getUser());

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <>
      <NavBar user={user} onLogout={handleLogout} />
      <main className="container">
        {user ? children : <LoginForm onLogin={setUser} />}
      </main>
    </>
  );
};

export default Layout;
