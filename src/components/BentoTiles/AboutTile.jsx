import React from "react";
import { useNavigate } from "react-router-dom";

function AboutTile() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
  };
  return (
    <div
      className="grid-item lg:row-span-2 md:row-span-2 bg-[#C6D8E5] p-8"
      onClick={handleNavigate}
    >
      <p className="font-Tangerine text-3xl tracking-wide">About</p>
      <div className="flex flex-col gap-8 mt-8">
        <div>
          <span className="text-lg font-semibold">Full Stack Developer </span>
          <p className="text-md text-gray-600 font-semibold">Sowmith Sripadi</p>
        </div>
        <div>
          <p className="text-lg">Florida International University </p>
          <span className="text-md text-gray-600">
            Master's in Computer Science
          </span>
        </div>
        <div>
          <p className="text-lg">MVSR</p>
          <span className="text-md text-gray-600">
            Bachelor's in Computer Science and Engineering
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutTile;
