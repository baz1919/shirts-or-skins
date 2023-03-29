import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";
import { getCookie } from "cookies-next";

import LoginForm from "../components/login/LoginForm";
import Home from "./Home";
import { ACCESS_TOKEN_KEY, getUser, logout } from "../utils/auth";
import { client } from "../graphql/client";
import NavBar from "../components/common/NavBar";

const App = ({ pageProps: { user: initialUser } }) => {
  const [user, setUser] = useState(initialUser || getUser());

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <ApolloProvider client={client}>
      <main className="container">
        <NavBar user={user} onLogout={handleLogout} />
        {user ? <Home /> : <LoginForm onLogin={setUser} />}
      </main>
    </ApolloProvider>
  );
};

export default App;

export const getServerSideProps = ({ req, res }) => {
  const token = getCookie(ACCESS_TOKEN_KEY, { req, res });
  const user = getUser(token);

  return { props: { user } };
};
