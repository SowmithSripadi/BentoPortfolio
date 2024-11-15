import React from "react";

import { useNavigate } from "react-router-dom";

function ExperienceTile() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/experience");
  };
  return (
    <div
      className="grid-item lg:col-span-2 md:col-span-2 bg-[#D9E3B9] p-8"
      onClick={handleNavigate}
    >
      <p className="font-Tangerine text-2xl tracking-wide mb-4">
        Professional Experience
      </p>

      <p>
        <span className="font-semibold">Accenture</span> | Application
        Development Associate
      </p>
      <span className="text-sm text-gray-600">August 2021 - Dec 2022</span>
      <p>
        <span className="font-semibold">Florida International University</span>{" "}
        | Teaching Assistant
      </p>
      <span className="text-sm text-gray-600">May 2021 - Present</span>
    </div>
  );
}

export default ExperienceTile;
