import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";

import LoginForm from "./components/login/LoginForm";
import Home from "./pages/Home";
import { getUser, logout } from "./utils/auth";
import { client } from "./graphql/client";
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
