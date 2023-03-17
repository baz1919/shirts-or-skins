import * as React from "react";

import MatchList from "../components/common/MatchList";
import CreateMatch from "../components/homepage/CreateMatch/CreateMatch";

const Home = () => (
  <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-b from-white to-slate-200">
    <CreateMatch />
    <h1 className="my-2 text-lg font-bold">Or edit an existing one</h1>
    <MatchList />
  </div>
);

export default Home;
