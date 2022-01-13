import type { NextPage } from "next";
import Description from "../components/Description";
import Scanner from "../components/Scanner";

const Home: NextPage = () => {
  return (
    <>
      <Description />
      <Scanner />
    </>
  );
};

export default Home;
