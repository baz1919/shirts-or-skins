import * as React from "react";

import MatchList from "../components/common/MatchList";

const Home = () => (
  <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-b from-white to-slate-200">
    <button type="button" className="px-4 py-2 rounded-full bg-blue-200 h-10 my-4 text">Create match</button>
    <h1 className="my-2 text-lg font-bold">Or edit an existing one</h1>
    <MatchList />
  </div>
);

export default Home;
