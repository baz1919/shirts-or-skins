import * as React from "react";
import { getCookie } from "cookies-next";

import CreateMatch from "../components/homepage/CreateMatch";
import MatchList from "../components/homepage/MatchList";

import { ACCESS_TOKEN_KEY, getUser } from "../utils/auth";

const App = () => (
  <section>
    <CreateMatch />
    <MatchList />
  </section>
);
export default App;

export const getServerSideProps = ({ req, res }) => {
  const token = getCookie(ACCESS_TOKEN_KEY, { req, res });
  const user = getUser(token);

  return { props: { user } };
};
