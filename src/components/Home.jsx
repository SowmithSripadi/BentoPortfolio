import React from "react";
import NavBar from "./NavBar";
import { Bentogrid } from "../pages";

function Home() {
  return (
    <>
      <h1 className="mt-10 lg:text-[50px] text-[60px] cursor-pointer text-center font-Tangerine">
        Home
      </h1>

      <Bentogrid />
    </>
  );
}

export default Home;
