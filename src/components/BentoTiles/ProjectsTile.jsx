import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectsTile() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <div
      className="grid-item lg:col-span-2 md:col-span-2 bg-[#D4C8ED] p-8 cursor-pointer hover:bg-opacity-90 transition duration-300"
      onClick={handleNavigate}
      tabIndex="0"
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleNavigate();
        }
      }}
      aria-label="Navigate to Projects"
    >
      <p className="font-Tangerine text-2xl tracking-wide mb-4">Projects</p>

      {/* SocialCart Project */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">SocialCart</h3>
        <p className="text-gray-700 text-md mb-2">
          Developed a real-time collaborative shopping feature in an ecommerce
          app.
        </p>
      </div>

      {/* TriedAndTested Project */}
      <div>
        <h3 className="text-lg font-semibold">TriedAndTested</h3>
        <p className="text-gray-700 text-md mb-2">
          Developed a blogging app for user-driven solutions to real-world
          problems.
        </p>
      </div>
    </div>
  );
}

export default ProjectsTile;
