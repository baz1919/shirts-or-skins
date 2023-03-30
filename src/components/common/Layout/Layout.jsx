import * as React from "react";
import { getUser, logout } from "utils/auth";
import LoginForm from "components/login/LoginForm";
import NavBar from "components/common/NavBar";

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
