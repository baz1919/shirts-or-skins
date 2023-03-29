import * as React from "react";

import MatchList from "../components/common/MatchList";
import CreateMatch from "../components/homepage/CreateMatch/CreateMatch";

const Home = () => (
  <section>
    <CreateMatch />
    <p>Or edit an existing one</p>
    <MatchList />
  </section>
);

export default Home;
