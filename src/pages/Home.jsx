import MatchList from "../components/common/MatchList";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-indigo-500">
      <h1 className="m-5">Select your match or create a new one</h1>
      <MatchList />
    </div>
  );
};

export default Home;
