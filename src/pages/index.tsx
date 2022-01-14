import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { NextPage } from "next";
import Description from "../components/Description";
import Scanner from "../components/Scanner";
import { reset } from "../libs/slices/ImageCardSlice";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  });

  return (
    <>
      <Description />
      <Scanner />
    </>
  );
};

export default Home;
