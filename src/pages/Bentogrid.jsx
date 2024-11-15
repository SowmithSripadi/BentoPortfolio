import React from "react";

import {
  AboutTile,
  ExperienceTile,
  TechStackTile,
  ProjectsTile,
  ContactTile,
  ImageTile,
} from "../components";

function Bentogrid() {
  return (
    <div className="flex justify-center lg:mt-[100px] md:mt-[100px] mt-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 lg:gap-[30px] md:gap-[20px] gap-10 max-w-[1000px] max-h-[1000px]">
        <AboutTile />
        <ExperienceTile />
        <ImageTile />
        <TechStackTile />
        <ProjectsTile />
        <ContactTile />
      </div>
    </div>
  );
}

export default Bentogrid;
