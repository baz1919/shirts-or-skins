import * as React from "react";
import { logout } from "utils/auth";
import LoginForm from "components/login/LoginForm";
import NavBar from "components/common/NavBar";
import { useUserContext } from "context/User/UserContext";

const Layout = ({ initialUser, children }) => {
  // const [user, setUser] = React.useState(initialUser || getUser());
  const { state, dispatch } = useUserContext();

  React.useEffect(() => {
    // setUser(user);
    if (!state.user) {
      dispatch({ type: "setUser", payload: initialUser });
    }
  }, [initialUser]);

  const handleLogout = () => {
    logout();
    dispatch({ type: "setUser", payload: null });
    // setUser(null);
  };

  return (
    <>
      <NavBar user={state.user} onLogout={handleLogout} />
      <main className="container">{state.user ? children : <LoginForm />}</main>
    </>
  );
};

export default Layout;
