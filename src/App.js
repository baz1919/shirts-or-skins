import { ApolloProvider } from "@apollo/client";
import { useState } from "react";

import LoginForm from "./components/login/LoginForm";
import Home from "./pages/Home";
import { getUser } from "./utils/auth";
import { client } from "./graphql/client";
import { logout } from "./utils/auth";
import NavBar from "./components/common/NavBar";

const App = () => {
  const [user, setUser] = useState(getUser);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <ApolloProvider client={client}>
      <NavBar user={user} onLogout={handleLogout} />
      {user ? <Home /> : <LoginForm onLogin={setUser} />}
    </ApolloProvider>
  );
};

export default App;
